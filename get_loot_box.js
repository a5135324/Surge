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
            $notification.post("α Network LootBox", "", "連線錯誤‼️");
            $done();
        } else {
            if (response.status == 200) {
                let obj = JSON.parse(data);
                if (obj["Succeeded"]) {
                    var reward = obj["RewardText"];
                    $notification.post("α LootBox", "", reward + " ✅");
                    suc = true;
                    $done();
                } else {
                    console.log(obj["ErrorMessage"]);
                    $done();
                }
            } else {
                $notification.post("α Network LootBox", "", "失敗‼️");
                $done();
            }
        }
    });
}

function skipAds() {
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
            $notification.post("α Network adWatch", "", "連線錯誤‼️");
            $done();
        } else {
            if (response.status == 200) {
                let obj = JSON.parse(data);
                if (obj["Succeeded"]) {
                    var reward = obj["RewardText"];
                    $notification.post("α ADWatch", "", reward + " ✅");
                    $done();
                } else {
                    console.log(obj["ErrorMessage"]);
                    $done();
                }
            } else {
                $notification.post("α Network adWatch", "", "失敗‼️");
                $done();
            }
        }
    });
}

function sleep(milliseconds) { 
    var start = new Date().getTime(); 
    while(1)
        if ((new Date().getTime() - start) > milliseconds)
            break;
}

skipAds();
var suc = false;
var limit = 0;
while(!suc) {
    getLootBox();
    sleep(1000);
    limit = limit + 1;
    if (limit == 10)
        break;
}
skipAds();
