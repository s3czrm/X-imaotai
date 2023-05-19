/******************************************
 * @name 彩云天气
 * @desc 解锁彩云天气SVIP
 * @statement 仅供学习交流，禁止用于商业用途
 * @author yuheng
 * @create 20230519
 * @version 1.0.0
******************************************

[mitm]
hostname = *.caiyunapp.*,*cyapi*

[rewrite_local]
^http[s]?:\/\/biz\.(caiyunapp|cyapi)\.(com|cn)\/v2\/user.*$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/caiyun.js

******************************************/
let body = JSON.parse($response.body)
body
    .result = {
    ...body.result,
    'xy_vip_expire': 0,
    'vip_expired_at': 0,
    'auto_renewal_type': '',
    'third_party_id': null,
    'svip_expired_at': 32494698549.41677,
    'is_xy_vip': true,
    'xy_svip_expire': 2061894341,
    'is_xy_auto_renewal': false,
    'is_primary': true,
    'free_trial': 0,
    'vip_type': 's',
    'is_phone_verified': true,
    'wt': {
        ...body.result.wt,
        'vip': {
            'enabled': true,
            'is_auto_renewal': false,
            'auto_renewal_type': '',
            'svip_auto_renewal_type': '',
            'svip_expired_at': 32493834549000.418,
            'expired_at': 0
        },
        'svip_given': 365,
    },
    'bound_status': {
        ...body.result.bound_status,
    },
    'hasBeenInvited': true,
    'svip_given': 365,
    'is_vip': true,
}

$done({ body: JSON.stringify(body) });