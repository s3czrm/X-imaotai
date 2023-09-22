/******************************************
 * @name 糖心Vlog🚗
 * @description 解锁会员视频、金币暂时无解(如果有老哥可以提供金币卡请私聊我)
 * @statement 仅供学习交流|禁止用于商业用途|违者后果自负|
 * @statement 转载请注明来源|欢迎分享|拒绝倒卖|倒卖🐕必死🐎
 * @channel https://t.me/yqc_123/
 * @feedback https://t.me/yqc_777/
 * @download https://txvlog.com
 * @author 𝒀𝒖𝒉𝒆𝒏𝒈
 * @update 20230921
 * @version 1.0.0
******************************************

^https?:\/\/tx.*\.com\/h5\/user\/info$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/txvlog/bodyRewrite.js
^https?:\/\/tx.*\.com\/h5\/movie\/detail$ url script-request-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/txvlog/headersRewrite.js

hostname = txh*.com, txk*.com, tx*.com

******************************************/