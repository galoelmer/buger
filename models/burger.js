const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(result){
            cb(result);
        });
    },
    updateOne: function(colVal, condition, cb){
        orm.updateOne("burgers", colVal, condition, function(result){
            cb(result);
        });
    }
}

module.exports = burger;
