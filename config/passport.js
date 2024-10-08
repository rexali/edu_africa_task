import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import dotenv from "dotenv";
import { Federation } from "../model/federation.model";
import { User } from "../model/user.model";

dotenv.config();


// Use Google startegy
passport.use(new GoogleStrategy.Strategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: 'https://localhost:3030/auth/oauth2/redirect/google'
},
    function (
        accessToken, 
        refreshToken, 
        profile, 
        cb
    ) {
        Federation.findOne({ provider: "https://www.google.com", subject: profile.id })
            .then((cred) => {
                if (!cred) {
                    // The Google account has not logged in to this app before.  Create a
                    // new user record and link it to the Google account.
                    User.create({
                        email: profile.displayName,
                        password: "",
                        role: ""
                    }).then((user) => {
                        Federation.create({ 
                            provider: "https://www.google.com", 
                            subject: profile.id,
                            user:{
                                _id:user._id,
                                email:user.email
                            } 
                        }).then((res) => {
                            var newUser = {
                                id: user._id, // lastId from User
                                username: profile.displayName
                            };

                            return cb(null, newUser);
                            // federated credentials
                        }).catch(err => {
                            if (err) { 

                                return cb(err);
                             }
                        });
                        // user
                    }).catch(err => {
                        if (err) { 

                            return cb(err); 
                        }
                    })
                } else {
                    // The Google account has previously logged in to the app.  Get the
                    // user record linked to the Google account and log the user in.
                    User.findOne({ _id: cred._id }).then((user) => {
                        if (!user) { 
                            return cb(null, false); 
                        }

                        return cb(null, user);
                    }).catch(err => {
                        if (err) { 

                            return cb(err); 
                        }
                    })
                }
            }).catch(err => {
                if (err) {
                    if (err) {

                        return cb(err); 
                    }
                }
            })
    }));

// serialialise
passport.serializeUser(function (user, done) {
    done(null, user)
})
// deserialise
passport.deserializeUser(function (id, done) {
    User.findByPk(id).then((user) => {
        done(null, user)
    }).catch(err => {
        done(err, null)
    })
})

export default passport;