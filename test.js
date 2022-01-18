const mysqlUtil = require("./db").mysqlUtil;

mysqlUtil.commit("select * from user", function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    console.log(fields);
});
