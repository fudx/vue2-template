const Mock = require('mockjs');
let data = Mock.mock({
    result: 0, // 返回状态码
    result_string: 'success',
    content: {
        draw_id: '111',
        activity_status: 1,
        residue_degree: 0,
        award_info: {
            title: '免息券', //	文案
            type: "2",
            resource_type: 1, //	资源类型
            img_url: '',
            img_url: 'https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/test/jiang.png', // 奖品图片url
            scene_service: '', // 使用链接
            amount: 1, //	红包金额，（单位：分）
            count: 1, //	券个数
            template_no: '', //	奖品模板
        }
    }
});

module.exports = (req, res) => {
    setTimeout(() => {
        res.send(data);
    }, 100);
};

