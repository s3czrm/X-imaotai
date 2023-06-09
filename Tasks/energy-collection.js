/******************************************
 * @name 支付宝收取能量提示
 * @statement 修改自网络 删减一部分功能 仅自用 原脚本未标注作者
 * @author 𝒀𝒖𝒉𝒆𝒏𝒈
 * @create 20230603
 * @version 1.0.0
******************************************

[task_local]
55 7 * * * https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/energy-collection.js, tag=蚂蚁森林收能量

******************************************/
const $ = new compatibility()

$.notify("支付宝", "", "收能量啦", "alipay://platformapi/startapp?appId=60000002")

function compatibility() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
        if (_isLoon) return $persistentStore.read(key)
    }
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}