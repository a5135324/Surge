function getLootBox() {
    var openLootBoxRequest = {
        url: "https://minealpha.net/api/user/openLootBox",
        headers: {
            Cookie: $persistentStore.read("AlphaNetworkCookie"),
            "User-Agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148[jhsggiusfguiys784i4s763yggfyustfwgyu2768fevuyer,1.0]",
        },
    };
    $httpClient.get(openLootBoxRequest, function (error, response, data) {
        if (error) {
            $notification.post("Alpha Network LootBox", "", "連線錯誤‼️");
            $done();
        } else {
            if (response.status == 200) {
                let obj = JSON.parse(data);
                if (obj["Succeeded"]) {
                    var reward = obj["RewardText"];
                    $notification.post("LootBox", "", reward + " ✅");
                    $done();
                } else {
                    $notification.post("打開 LootBox", "", "遇到未知問題 ❌");
                    $done();
                }
            } else {
                $notification.post("Alpha Network LootBox", "", "失敗‼️");
                $done();
            }
        }
    });
    
    var adWatchRequest = {
        url: "https://minealpha.net/api/user/adWatched",
        headers: {
            Cookie: $persistentStore.read("AlphaNetworkCookie"),
            "User-Agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148[jhsggiusfguiys784i4s763yggfyustfwgyu2768fevuyer,1.0]",
        },
    };
    $httpClient.get(adWatchRequest, function (error, response, data) {
        if (error) {
            $notification.post("Alpha Network adWatch", "", "連線錯誤‼️");
            $done();
        } else {
            if (response.status == 200) {
                let obj = JSON.parse(data);
                if (obj["Succeeded"]) {
                    var reward = obj["RewardText"];
                    $notification.post("adWatch", "", reward + " ✅");
                    $done();
                } else {
                    $notification.post("adWatch", "", "遇到未知問題 ❌");
                    $done();
                }
            } else {
                $notification.post("Alpha Network adWatch", "", "失敗‼️");
                $done();
            }
        }
    });
}

getLootBox();
