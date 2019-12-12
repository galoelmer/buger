const connection = require("./connection.js");

const orm = {
    selectAll: function(tableName, cb){
        const query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
}

module.exports = orm;
