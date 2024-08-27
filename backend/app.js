const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");
const cors = require("cors");
const UserRoutes = require("./routes/UserRoutes");



mongoose.connect("mongodb://127.0.0.1:27017/Passport-Authentication")
    .then(() => {
        console.log("Database connection established!");
    })
    .catch((err) => {
        console.log(err);
    })

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// app.use(cors({ origin: ["http://localhost:3000"] }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());



passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.use(UserRoutes);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})