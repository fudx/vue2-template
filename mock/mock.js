/**
 * @file mock数据
 * @refs https://github.com/xuxihai123/vue-cli-plugin-mock
 */

/**
 * mockjs
 *
 * @refs https://github.com/nuysoft/Mock/wiki/Getting-Started
 */
const Mock = require('mockjs');

module.exports = {
    'POST /path/to/api' : Mock.mock({
        result : 0,
        content: {
            'list|1-10': [{
                'id|+1': 1
            }]
        }
    }),
    // 首页
    'POST /jhuodong/world_cup/index': require('./api/index.js'),
    // 开启接红包接口
    'POST /jhuodong/world_cup/recv_lottery/begin': require('./api/lottery_begin.js'),
    // 接红包抽奖接口
    'POST /jhuodong/world_cup/recv_lottery/draw': require('./api/lottery_draw.js'),
    // 注册（确认协议）接口，注册实际上需要调用埋点接口
    'POST /jhuodong/gift_package/register': require('./api/register.js'),
    // 奖品列表
    'POST /jhuodong/common/reform/activity_coupons': require('./api/activity_coupons.js'),
    'POST /jhuodong/gift_package/reporting': require('./api/reporting.js'),
};
