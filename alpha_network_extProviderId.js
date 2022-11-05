if ($response.status === 200) {
    var data = JSON.parse($response.body)
    const saveAlphaProviderID = $persistentStore.write(data["User"]["ExternalProviderId"], "AlphaProviderID");
    const url = $request.url;

    console.log('url: ' + url);
    console.log('ProviderID: ' + saveAlphaProviderID);

    if (!(saveAlphaProviderID)) {
        $notification.post("α Network ID 保存錯誤‼️", "", "請重新登入")
    } else {
        $notification.post("α Network ID 保存成功🎉", "", "")
    }
} else {
    $notification.post("α Network ID 保存失敗‼️", "", "請重新登入")
}
$done({})
