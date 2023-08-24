/******************************************
 * @name 人人视频
 * @description 解锁会员
 * @channel https://t.me/yqc_123
 * @group https://t.me/yqc_777
 * @author 𝒀𝒖𝒉𝒆𝒏𝒈
 * @update 20230824
 * @version 1.0.0
******************************************

hostname=api.hujuvod.com

^http[s]?://api.hujuvod.com/user/personal/information url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/rrsp.js

******************************************/

var { body: body } = $response, obj = JSON.parse(body); obj.data.user.vipInfo.level = "1", obj.data.user.vipInfo.valid = !0, obj.data.user.vipInfo.expiredTime = 4091217216e3, obj.data.user.vipLevel = "1", $done({ body: JSON.stringify(obj) });