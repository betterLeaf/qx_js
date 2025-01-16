// 名称：Mac69签到
// 定时：每天早上9点
// 主机：www.mac69.com

!(async () => {
    console.log('🔔Mac69签到, 开始!');
    
    // 从 Quantumult X 存储中获取 Cookie
    const cookie = $prefs.valueForKey('mac69_cookie');
    if (!cookie) {
        $notify('Mac69签到', '❌ 失败', '请先获取Cookie');
        return;
    }

    try {
        const url = 'https://www.mac69.com/api/sign_prize';
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'Referer': 'https://www.mac69.com/user/',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'origin': 'https://www.mac69.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'x-requested-with': 'XMLHttpRequest',
            'Cookie': cookie
        };

        // 使用 Quantumult X 的 $task.fetch 发送请求
        $task.fetch({
            url: url,
            method: 'POST',
            headers: headers
        }).then(response => {
            if (response.statusCode === 200) {
                try {
                    const result = JSON.parse(response.body);
                    console.log(`✅ 签到成功: ${JSON.stringify(result)}`);
                    $notify('Mac69签到', '✅ 签到成功', JSON.stringify(result));
                } catch (e) {
                    console.log(`❌ 签到失败: ${response.body}`);
                    $notify('Mac69签到', '❌ 签到失败', `返回数据解析错误: ${response.body}`);
                }
            } else {
                console.log(`❌ 签到失败: 状态码 ${response.statusCode}`);
                $notify('Mac69签到', '❌ 签到失败', `状态码: ${response.statusCode}`);
            }
        }).catch(error => {
            console.log(`❌ 签到失败: ${error}`);
            $notify('Mac69签到', '❌ 签到失败', `请求错误: ${error}`);
        });
    } catch (e) {
        console.log(`❌ 签到失败: ${e}`);
        $notify('Mac69签到', '❌ 签到失败', `运行时错误: ${e}`);
    }
    
    console.log('🔔Mac69签到, 结束!');
})(); 