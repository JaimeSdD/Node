const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user.model");

router.post("/register", (req, res, next) => {

  passport.authenticate("register", (error,user) => {
    if (error){
        return next(error);
    }
    req.logIn(user, (error) => {
        if(error){
            return next(error);
        }
        return res.status(200).json(user)
    });
  })(req);
});

router.post("/login", (req, res, next) => {
    passport.authenticate("login", (error, user) => {
        if (error) return next(error)

        req.logIn(user, (error) => {
            if(error){
                return next(error);
            }
            return res.status(200).json(user)
        });
    })(req);
});

router.post("/logout", (req, res, next) => {
    if (req.user){
        req.logout();
       

        req.session.destroy(() => {
            res.clearCookie("connect.sid");
            return res.status(200).json("Bye bye");
        });
    } else {
        return res.sendStatus(304);
    }
});

module.exports = router;