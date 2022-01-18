const config = require("./constant");
const mysql = require('mysql');
const mysqlUtil = mysql.createConnection({
    host: config.mysqlHost,
    port: config.mysqlPort,
    user: config.mysqlUser,
    password: config.mysqlPSW,
    database: config.mysqlBD
});


module.exports = {
    mysqlUtil
};