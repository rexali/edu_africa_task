// import required modules
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("./config/passport");
const session = require("express-session");
const { ObjectId } = require("mongodb");
const dotenv = require('dotenv');
// initiatize the .env
dotenv.config();
// import error and log handlers
const { logHandler } = require("./utils/logHandler");
const { errorHandler } = require("./utils/errorHandler");
// import auth and admin routes
const { authRouter } = require("./auth/authRoutes");
const { profileRouter } = require("./profiles/profileRoutes");
const { User } = require("./model/user.model");
const { Profile } = require("./model/profile.model");
const { Course } = require("./model/course.model");
const { Module } = require("./model/module.model");
// instantiate express
const app = express();
// port
const PORT = 3001;
// host
const HOST = "localhost";
// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse cookies
app.use(cookieParser());
// apply default cors to the server 
app.use(cors());
// session
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true, cookie: { secure: true } }))
// initialize newpassport
app.use(passport.initialize());
// use newpassport session
app.use(passport.session())
// set view engine
app.set('view engine', 'ejs');
// set views
app.set('views', 'views');
// get error 
app.use(errorHandler);
//log request info in the console
app.use(logHandler);
// define auth and admin routes
app.use("/auth", authRouter);
app.use("/profiles", profileRouter);
// server home
app.get("/", async (req, res) => {
    try {
        // render home page
        // const course = await Course.create({
        //     title: "My",
        //     description: "Home",
        //     instructor: "Ali", // creator or user
        //     duration: 60,
        //     level: "intermediate",
        //     photo: "wert.jpg",
        //     price: 2000,
        //     skills: ["fighy", "play"]
        // }
        // );
        // const module = await Module.create({
        //     title: "Men",
        //     descriptition: "am",
        //     resources: ["goo.lk"],
        //     order: 1,
        // })

        const user = await User.create({
            email: "allby43333@gmail.com",
            password: "2234t6",
            role: "user", // creator or user
        });

        const profile = await Profile.create({
            firstName: "Alalala",
            lastName: "Babalalal",
            photo: "wertjpj.jpg",
            user: { _id: user._id }
        });

        const course = await Profile.findById(profile._id).populate('user').exec();
        console.log(course.user);

        res.render("home", {});
    } catch (error) {
        // catch error
        console.warn(error);
        res.status(500).json({
            status: "fail",
            data: null,
            message: "Internal server error"
        });
    }
});

// catch not-found resources
app.use((req, res) => {
    try {
        // return json
        res.status(404).json({
            status: "fail",
            data: null,
            message: "page not found"
        });
        // catch error
    } catch (error) {
        // log error
        console.warn(error);
        res.status(500).json({
            status: "fail",
            data: null,
            message: "Internal server error"
        });
    }
});
// listent to server  
app.listen(PORT, HOST, () => {
    // log to the console
    console.log(`The server host is ${HOST} and is listening at port ${PORT}`);
});
// make app object available to the whole application
module.exports = app;

