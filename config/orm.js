const connection = require("./connection.js");

const orm = {
    selectAll: function(){
        const query = "SELECT * FROM burgers";
        connection.query(query, function(err, result){
            if (err) throw err;
            console.table(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
}

module.exports = orm;
