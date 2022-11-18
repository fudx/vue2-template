const Mock = require('mockjs');

const data = Mock.mock({
    "result": 0,
    "content": {
        "message": "任务完成，返回领奖",
        "options": "{\n    \"appKey\": \"tnftmAhLH07hnsmVLykiaAMWQlILCVKc\",\n    \"path\": \"pages/index/index?from=taskJump\"\n}",
        "schema": "baiduboxlite://swan/tnftmAhLH07hnsmVLykiaAMWQlILCVKc/pages/index/index?from=taskJump",
        "url": "",
        "progress": {
            "complete": 4,
            "done": false,
            "total": 100
        }
    },
    "result_string": "Success"
});

module.exports = (req, res) => {
    setTimeout(() => {
        res.send(data);
    }, 0);
};
