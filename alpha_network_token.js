if ($request.headers['Cookie']) {
	const cookie = $request.headers['Cookie'];
	const url = $request.url;

	console.log('url: ' + url);
	console.log('cookie: ' + cookie);

	const saveCookie = $persistentStore.write(cookie, "AlphaNetworkCookie");

	if (!(saveCookie)) {
        $notification.post("Alpha Network Cookie 保存錯誤‼️", "", "請重新登入")
    } else {
        $notification.post("Alpha Network Cookie 保存成功🎉", "", "")
    }
} else {
    $notification.post("Alpha Network Cookie 保存失敗‼️", "", "請重新登入")
}
$done({})
