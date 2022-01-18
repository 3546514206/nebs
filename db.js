const config = require("./constant");
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: config.mysqlHost,
    port: config.mysqlPort,
    user: config.mysqlUser,
    password: config.mysqlPSW,
    database: config.mysqlBD
});


module.exports = {
    mysqlConnection
};