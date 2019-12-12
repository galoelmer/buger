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
    updateOne: function(){

    }
}

module.exports = burger;
