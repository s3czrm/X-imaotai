/******************************************
 * @name 发财TV
 * @desc 逆向解锁VIP
 * @statement 仅供学习交流，禁止用于商业用途
 * @author yuheng
 * @create 20230508
 * @version 1.0.0
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
const body = $response.body.replace(/\"data":".*?"/g, '\"data":"9+5b72ccLbOPx2AJ/rMwnKpXuWH6Ns39y6bzAQCotxtsbybXvhBolmVn4UMkVUZNuLhSOeYbAyGBUBQXib1diLaRR3S5acnWsH3E1rjOths3bkCFMN7f0Br6TNfB9z0dbo10jIjzegjj1nJXQ79lucvV2ZxSxKziSx0t9avW0gN9UCAn85XVWKx6fOleCX4S/fnV9zK3H5W5m6JYIn8O6LD1ztalY434UkEfRTNlqdx/iG76fIZLfX7Ebi4n39Cw1R8gi9PnIzgEpuIlsVq0SA=="');
$done({ body });