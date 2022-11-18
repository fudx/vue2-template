const Mock = require('mockjs');
let data = Mock.mock({
    result: 0, // 返回状态码
    result_string: 'success',
    content: {
        draw_id: '11',
        residue_degree: 1,
        continue_times: 6,
        time_info: {
            current_time: '1651221851530', //	当前时间
            stage1_end_time: '1651221874040', //	活动结束时间
        }
    }
});

module.exports = (req, res) => {
    setTimeout(() => {
        res.send(data);
    }, 100);
};

