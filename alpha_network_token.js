if ($request.headers['Cookie']) {
    const cookie = $request.headers['Cookie'];
    const url = $request.url;

    console.log('url: ' + url);
    console.log('cookie: ' + cookie);

    const saveCookie = $persistentStore.write(cookie, "AlphaNetworkCookie");

    if (!(saveCookie)) {
        $notification.post("α Network Cookie 保存錯誤‼️", "", "請重新登入")
    } else {
        $notification.post("α Network Cookie 保存成功🎉", "", "")
    }
} else if ($request.headers['cookie']) {
    const cookie = $request.headers['cookie'];
    const url = $request.url;

    console.log('url: ' + url);
    console.log('cookie: ' + cookie);

    const saveCookie = $persistentStore.write(cookie, "AlphaNetworkCookie");

    if (!(saveCookie)) {
        $notification.post("α Network Cookie 保存錯誤‼️", "", "請重新登入")
    } else {
        $notification.post("α Network Cookie 保存成功🎉", "", "")
    }
} else {
    $notification.post("α Network Cookie 未發現‼️", "", "請重新開啟 app")
}
$done({})
