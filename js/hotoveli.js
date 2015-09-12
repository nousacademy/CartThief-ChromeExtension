chrome.extension.onMessage.addListener(function(request, sender, response) {
    console.log(request)
    //    var caption = document.getElementsByClassName('caption');
    //    
    //    for (i = 0; i < caption.length; i++) {
    //        //console.log(caption[i].children[2])
    //
    //        if(!caption[i].children[2].children[0].childNodes[3].innerText.indexOf('SOLD OUT') > -1){
    //            caption[i].children[2].children[0].childNodes[3].click()
    //        }
    //    }

    if (window.location.href.indexOf("products") > -1) {
        setTimeout(function() {
            var option = document.getElementsByTagName('option');
            for (i = 0; i < option.length; i++) {
                var szWanted = request.size;
                var szAvlble = option[i].innerHTML;
                if (szAvlble.indexOf(szWanted) >= 0) {
                    option[i].selected = true;

                    document.getElementById('add-to-cart').click();
                }
            }
        }, 3000)
    }

    if (window.location.href.indexOf("cart") > -1) {
        setTimeout(function() {
            document.getElementsByClassName('item-quantity')[0].value = request.quantity;
            document.getElementById('checkout').click();
        }, 3000)
    }

    if (window.location.href.indexOf("shopify") > -1) {
        setTimeout(function() {
            document.getElementById('continue-shopping').click();
        }, 3000)
    }

});