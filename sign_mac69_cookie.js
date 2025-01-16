/*
 * @Author: wsj wsj@cdtrust.com
 * @Date: 2025-01-16 13:46:38
 * @LastEditors: wsj wsj@cdtrust.com
 * @LastEditTime: 2025-01-16 14:15:48
 * @FilePath: /sign/sign_mac69_cookie.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
// 名称：Mac69 Cookie 获取
// 主机：www.mac69.com
// 用途：获取签到所需的 Cookie

(() => {
    console.log('开始获取 Mac69 Cookie');
    
    try {
        const cookie = $request.headers['Cookie'] || $request.headers['cookie'];
        if (cookie) {
            // 保存 Cookie 到 Quantumult X 的存储中
            $prefs.setValueForKey(cookie, 'mac69_cookie');
            console.log(`Cookie 获取成功: ${cookie}`);
            $notify('Mac69 Cookie', '✅ 获取成功', cookie);
        } else {
            console.log('未找到 Cookie');
            $notify('Mac69 Cookie', '❌ 获取失败', '请检查网站是否正常登录');
        }
    } catch (e) {
        console.log(`获取 Cookie 出错: ${e}`);
        $notify('Mac69 Cookie', '❌ 获取失败', `错误信息: ${e}`);
    }
    
    $done({});
})(); 