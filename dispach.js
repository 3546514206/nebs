function doDispach(request, response) {
    response.writeHead(200,
        {
            "Content-Type": "application/json"
        });

    let body = JSON.stringify(
        {
            data: [
                {"name": "杨海波", "age": 18},
                {"name": "沈馨怡", "age": 17},
                {"name": "李松鹏", "age": 99},
                {"name": "赵美钰", "age": 16},
                {"name": "吴君豪", "age": 9999},
                {"name": "肖晓霖", "age": 9999},
            ],
            result: "success"
        }
    );

    response.end(body);
}


module.exports = {
    doDispach
};