const Mock = require('mockjs');
let data = Mock.mock({
    "result": 0,
    "content":{
        schema: 'baiduboxlite://swan/tnftmAhLH07hnsmVLykiaAMWQlILCVKc/pages/index/index?from=taskJump',
        "login_state":1,
        "can_draw_red_envelop": 1,
        "gift_package_item_list":[
            {
                "priority":2,
                "lottery_id":138,
                "lottery_name":"1888现金红包",
                "send_type":1,
                "img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/%E9%87%8D%E7%82%B9%E5%88%B81.png",
                "display_title":"1888现金红包",
                "sub_title":"1888现金红包副标题",
                "discount_content":"",
                "btn_img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/btn%20.png",
                "received_img_url":"",
                "received_btn_url":"",
                "show_type":2,
                "inner_url":"",
                "outer_url":"",
                "is_receive":1
            },
            {
                "priority":3,
                "lottery_id":140,
                "lottery_name":"首期免息券",
                "send_type":1,
                "img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/%E5%88%B82.png",
                "display_title":"首期免息券",
                "sub_title":"副文案",
                "discount_content":"",
                "btn_img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/btn.png",
                "received_img_url":"",
                "received_btn_url":"",
                "show_type":2,
                "inner_url":"",
                "outer_url":"",
                "is_receive":1
            },
            {
                "priority":4,
                "lottery_id":139,
                "lottery_name":"万一入口券",
                "send_type":1,
                "img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/%E5%88%B82.png",
                "display_title":"年化3.6%券",
                "sub_title":"副标题",
                "discount_content":"",
                "btn_img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/btn.png",
                "received_img_url":"",
                "received_btn_url":"",
                "show_type":1,
                "inner_url":"",
                "outer_url":"",
                "is_receive":1
            },
            {
                "priority":4,
                "lottery_id":139,
                "lottery_name":"万一入口券",
                "send_type":1,
                "img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/%E5%88%B82.png",
                "display_title":"年化3.6%券",
                "sub_title":"副标题",
                "discount_content":"",
                "btn_img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/dwj/btn.png",
                "received_img_url":"",
                "received_btn_url":"",
                "show_type":1,
                "inner_url":"",
                "outer_url":"",
                "is_receive":1
            }
        ],
        "time_info":{
            "current_time":1662031995062,
            "stage1_end_time":1669886061000
        },
        "is_register":0,
        "agreement_switch":0,
        "tracks":{
            "distinct_id":"dxm_2ZHH4U",
            "user_status":0
        },
        show_floating_layer:1,
    },
    "result_string":"Success"
});
// let data = Mock.mock({"result":0,"content":{"login_state":0,"is_register":null,"agreement_switch":null,"can_draw_red_envelop":null,"show_floating_layer":null,"tracks":null,"gift_package_item_list":[{"priority":9,"lottery_id":160,"lottery_name":"60元免息券","send_type":1,"img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/hdfactory/hd_default_8617/YYZ-mianxiSHOUQI.png","display_title":"60元免息券","sub_title":"60元免息券副标题","discount_content":"","btn_img_url":"https://plusjrmallstatic.bj.bcebos.com/wfe/offlineyuanyuzhou/111.png","received_img_url":"","received_btn_url":"","show_type":7,"inner_url":"ZdSl9nzL7","outer_url":"ZdSl9nzL7","is_receive":0}],"time_info":{"current_time":15737120000000,"stage1_end_time":16737120000000},"schema":null},"result_string":"Success"})
module.exports = (req, res) => {
    setTimeout(() => {
        res.send(data);
    }, 1000);
};

