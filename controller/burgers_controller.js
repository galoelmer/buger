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

// Update burger status
router.put("/update/:id", function(req, res){
    let condition = "id = " + req.params.id;
    burger.updateOne(["devoured", false], condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
