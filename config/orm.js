const connection = require("./connection.js");

const orm = {
    // Get all data from DB
    selectAll: function(tableName, cb){
        const query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // Add new data to DB
    insertOne: function(tableName, cols, values, cb){
        // Get question marks by looping through values
        // The map() method creates a new array of '?'
        // On every loop the arrow => function returns a '?'
        // and then turns it into a string. e.g. [1,2,3] => "?,?,?"
        let questionMarks = values.map( _ => "?").toString();

        let query = "INSERT INTO " + tableName;
        query+= " (" + cols.toString() + ") ";
        query+= "VALUES (" + questionMarks + ");";
        connection.query(query, values, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // Update database
    updateOne: function(tableName, colVal, condition, cb){

        // Turn Array values to SQL SET clause eg. ["table", "value"] => "table = value" 
        let arrayToSql = (arr) => {
            return arr.map((val, i) => arr[i]).join("=");
        };

        let query = "UPDATE " + tableName;
        query+= " SET " + arrayToSql(colVal);
        query+= " WHERE " + condition;

        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;
