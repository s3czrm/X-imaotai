/******************************************
 * @name 发财TV🚗
 * @description 解锁会员视频|开发摆烂去了加密🔐
 * @statement 仅供学习交流|禁止用于商业用途|违者后果自负|
              转载请注明来源|欢迎分享|拒绝倒卖|倒卖🐕必死🐎
 * @channel https://t.me/yqc_123
 * @group https://t.me/yqc_777
 * @author 𝒀𝒖𝒉𝒆𝒏𝒈
 * @update 20230718
 * @version 1.0.1
 * @url https://fctv111.com
 *      https://fctv222.com
 *      https://fctv333.com
 *      https://fctv444.com
 *      https://fctv555.com
******************************************
[mitm]
hostname = mdapi.zhbt01.com

[rewrite_local]
^https:\/\/mdapi\.zhbt01\.com\/api\/video\/user\/info url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/fctv.js

******************************************/
let { body } = $response
    , obj = JSON.parse(body)
if (obj?.data) {
    obj.data = {
        ...obj.data,
        end_time: '2099-01-01',
        level: 3,
        is_end: 1,
        look_end: 0,
    }
}
$done({ body: JSON.stringify(obj) })