const mysqlUtil = require("./db").mysqlUtil;

const doUserBiz = (param, request, response) => {
    mysqlUtil.commit("select * from user", function (error, results, fields) {
        if (error) {
            throw error;
        }

        response.writeHead(200, {"Content-Type": "application/json"});
        const body = JSON.stringify({"data": results});
        response.end(body);
    });
};

module.exports = {
    doUserBiz
};