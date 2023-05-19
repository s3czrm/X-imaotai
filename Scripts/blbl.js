/******************************************
 * @name 哔哩哔哩
 * @desc 哔哩哔哩解锁高码率
 * @statement 自用脚本 仅供学习交流，禁止用于商业用途
 * @author yuheng
 * @create 20230519
 * @version 1.0.0
******************************************

[mitm]
hostname = app.bilibili.com

[rewrite_local]
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/blbl.js

******************************************/
let body = $response.body;
/https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test($request.url) && ((body = JSON.parse(body), !parsedJSON.data.vip.status && (parsedJSON.data.vip.type = 2, parsedJSON.data.vip.status = 1, parsedJSON.data.vip.vip_pay_type = 1, parsedJSON.data.vip.due_date = 4087999199000), body = JSON.stringify(parsedJSON)));
$done({ body });