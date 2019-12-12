const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Get all burgers from DB
router.get("/", function(req, res){
    burger.selectAll(function(data){
        const hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

// Post new burger data to DB
router.post("/new", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.newBurger, true], function(result){
        res.json({id: result.insertId});
    });
});
module.exports = router;
