const biz = require("./biz");

function doDispach(request, response) {
    //todo 抽离业务参数
    const url = "doUserBiz";
    const param = {};

    Object.keys(biz).forEach(key => {
        if (key === url) {
            //console.log(key);
            eval("biz." + key + "(param,request,response)");
        }
    })
}

module.exports = {
    doDispach
};