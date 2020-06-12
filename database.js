const mysql = require("mysql");
const dbConnection = mysql
  .createPool({
    host: "localhost", // MYSQL HOST NAME
    user: "root", // MYSQL USERNAME
    password: "possible_5344", // MYSQL PASSWORD
    database: "nodejs_login", // MYSQL DB NAME
  })
  .promise();
module.exports = dbConnection;
