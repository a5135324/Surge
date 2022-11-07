const miningRequest = {
    url: 'https://minealpha.net/api/user/startWork',
    headers: {
        Cookie: $persistentStore.read("AlphaNetworkCookie"),
        "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148[jhsggiusfguiys784i4s763yggfyustfwgyu2768fevuyer,1.0]",
    },
    body: {
        "externalProviderId": $persistentStore.read("AlphaProviderID")
    }
}

function startMining() {
    $httpClient.post(miningRequest, function (error, response, data) {
        if (error) {
            $notification.post("α Network Mining 啟動失敗", "", "");
            $done();
        } else {
            if (response.status == 200) {
                let obj = JSON.parse(data);
                if (obj["Succeeded"]) {
                    var balance = obj["User"]["Balance"];
                    $notification.post("α Balance ✅", "", balance);
                    $done();
                } else {
                    console.log("α Network Mining", "", obj["ErrorMessage"]);
                    $done();
                }
            } else {
                $notification.post("α Network Mining 請求失敗‼️", "", "");
                $done();
            }
        }
    });
}

startMining();
