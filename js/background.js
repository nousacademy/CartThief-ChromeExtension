var data = [{
        "size": "YOUR SIZE",
        "first": "YOUR FIRST NAME",
        "last": "YOUR LAST NAME",
        "address": "YOUR ADDRESS",
        "apt": "YOUR APT",
        "zipcode": "YOUR ZIP CODE",
        "city": "New York",
        "state": "NY",
        "phone": "6467011353",
        "email": "YOUR EMAIL",
        "cardtype": "YOUR CARD",
        "cardnumber": "YOUR CARD NUMBER", 
        "cardexpmonth": "7",
        "cardexpyear": "19",
        "cardcvv": "308",
        "url": "http://www.eastbay.com/product/model:254106/sku:AQ2659/adidas-originals-yeezy-boost-350-mens/?cm=GLOBAL%20SEARCH:%20PRODUCT%20NUMBER%20SEARCH&SID=8698&cm_mmc=Linkshare-_-Deeplink-_-Text-_-Eastbay" // EASTBAY ENDPOINT
    }
        }, {
    
            "first": "YOUR FIRST NAME",
            "last": "YOUR LAST NAME",
            "address": "YOUR ADDRESS",
            "apt": "YOUR APT",
            "city": "YOUR CITY",
            "state": "YOUR STATE",
            "zipcode": "YOUR ZIP CODE",
            "phone": "YOUR NUMBER",
            "email": "YOUR EMAIL",
            "cardnumber": "YOUR CARD NUMBER",
            "cardexpmonth": "07",
            "cardexpyear": "2019",
            "cardcode": "308",
            "size": "YOUR SIZE",
            "url": "http://www.finishline.com/store/catalog/product.jsp?productId=prod794254&CMP=AFL-LS-affiliatechannel&sourceid=affiliate&siteID=je6NUbpObpQ-5OiCdR5LhsuOF4DsX6UfPg" // FINISHLINE ENDPOINT
        }, {
            "url": "http://www.champssports.com/", // CHAMPS ENDPOINT
            "size": "YOUR SIZE",
            "first": "YOUR FIRST NAME",
            "last": "YOUR LAST NAME",
            "address": "YOUR ADDRESS",
            "email": "YOUR EMAIL",
            "zipcode": "YOUR ZIP CODE",
            "city": "YOUR CITY",
            "state": "YOUR STATE",
            "phone": "7183382638",
            "email": "YOUR EMAIL",
            "cardtype": "VISA",
            "cardnumber": "YOUR CARD NUMBER",
            "cardexpmonth": "7",
            "champscardexpyear": "19",
            "cardcvv": "308"
        },
        {
            "url": "http://www.adidas.com/yeezy", // ADIDAS ENDPINT
            "size": "YOUR SIZE",
            "first": "YOUR FIRST NAME",
            "last": "YOUR LAST NAME",
            "address": "YOUR ADDRESS",
            "apt": "YOUR APT",
            "email": "YOUR EMAIL",
            "zipcode": "YOUR ZIP CODE",
            "city": "YOUR CITY",
            "state": "YOUR STATE",
            "phone": "YOUR NUMBER",
            "email": "YOUR EMAIL",
            "adidascardtype": "001",
            "cardexpmonth": "07",
            "adidascardexpyear": "2019",
            "cardnumber": "YOUR CARD NUMBER",
            "cardcvv": "308"
        }
    //    {"url": "http://hotoveli.com/collections/julius"}
]; 
//"http://hotoveli.com/collections/kanye-west-adidas"

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) { //from popup.js
        //createTab(0);

        for (var i = 0; i < data.length; i++) {

            (function(index) {
                console.log('iterator: ' + index);
                chrome.tabs.create({
                    url: data[index].url, // early link here
                    active: false
                }, function(tab) {

                    chrome.tabs.onUpdated.addListener(function(tabId, info) {
                        if (info.status == "complete") {

                            chrome.tabs.sendMessage(tab.id, data[index], function(response) {});
                        }

                    });

                });
            })(i);


        }


    });