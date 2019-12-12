const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
}

module.exports = burger;
