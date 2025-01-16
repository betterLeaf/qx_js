// 名称：Mac69签到
// 定时：每天早上9点
// 主机：www.mac69.com

const $ = new Env('Mac69签到');

!(async () => {
    const cookie = $.getdata('mac69_cookie');
    if (!cookie) {
        $.msg($.name, '❌ 失败', '请先获取Cookie');
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
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'x-requested-with': 'XMLHttpRequest',
            'Cookie': cookie
        };

        const options = {
            url: url,
            headers: headers
        };

        $.post(options, (err, resp, data) => {
            if (err) {
                $.msg($.name, '❌ 签到失败', `错误信息: ${err}`);
                return;
            }
            
            if (data) {
                try {
                    const result = JSON.parse(data);
                    $.msg($.name, '✅ 签到成功', JSON.stringify(result));
                } catch (e) {
                    $.msg($.name, '❌ 签到失败', `返回数据解析错误: ${data}`);
                }
            } else {
                $.msg($.name, '❌ 签到失败', '服务器返回空数据');
            }
        });
    } catch (e) {
        $.msg($.name, '❌ 签到失败', `运行时错误: ${e}`);
    }
})()
.catch((e) => $.log(e))
.finally(() => $.done());

// Env 函数部分保持不变 