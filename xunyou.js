/*******************************
公众号：木木IOS分享
关注了解更多新科技！！！
迅游
脚本名称：迅游
使用声明：️此脚本仅供学习与交流，
请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]^http[s]?:\/\/api.xunyou.mobi\/api\/v2\/android\/users\/689d937b-0aca-4d99-928c-b3763fd8aa7b\/tasks.+$ url script-response-body https://raw.githubusercontent.com/LJ0530/-/main/xunyou.js
hostname = *.xunyou。*
*******************************
涌起

[脚本]
^http[s]?:\/\/api.xunyou.mobi\/api\/v2\/android\/users\/689d937b-0aca-4d99-928c-b3763fd8aa7b\/tasks.+$ require-body=1,max-size=0,script-path=xunyou.js

[MITM]
hostname = *.xunyou。*

*******************************/
var obj = JSON.parse($response.body);
obj.data.taskName = "连续观看5个视频";
$done({body: JSON.stringify(obj)});
