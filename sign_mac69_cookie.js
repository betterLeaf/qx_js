/*
 * @Author: wsj wsj@cdtrust.com
 * @Date: 2025-01-16 13:46:38
 * @LastEditors: wsj wsj@cdtrust.com
 * @LastEditTime: 2025-01-16 13:47:01
 * @FilePath: /sign/sign_mac69_cookie.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
// 名称：Mac69 Cookie 获取
// 主机：www.mac69.com
// 用途：获取签到所需的 Cookie

const $ = new Env('Mac69 Cookie');

!(async () => {
    const cookie = $request.headers['Cookie'] || $request.headers['cookie'];
    if (cookie) {
        $.setdata(cookie, 'mac69_cookie');
        $.msg($.name, '获取 Cookie 成功 🎉', cookie);
    } else {
        $.msg($.name, '获取 Cookie 失败 ❌', '请检查网站是否正常登录');
    }
})()
.catch((e) => $.log(e))
.finally(() => $.done());

// Env 函数部分保持不变 