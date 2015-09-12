chrome.extension.onMessage.addListener(function(request, sender, response) {
    console.log(request)

    if (window.location.href.indexOf("product") > -1) {
        var sizes = document.getElementsByClassName('size'); // obj list

        for (i = 0; i < sizes.length; i++) {
            var szEl = sizes[i];
            var szWanted = request.size;
            var szAvlble = sizes[i].innerHTML;
            //console.log(szAvlble)
            if (szAvlble.indexOf(szWanted) >= 0) {
                szEl.click();
                //szEl.className = szEl.className + " selected";
                if (!window.location.href.indexOf("ship") > -1) {
                    document.getElementById('buttonAddToCart').click();
                }
                window.open('http://www.finishline.com/store/checkout/cart.jsp', '_self');



            }

        }
    }

    //test
    if (window.location.href.indexOf("cart") > -1) {
        setTimeout(function() {
            document.getElementsByClassName('leftArrow')[2].click();
        }, 5000)
    }
    if (window.location.href.indexOf("login") > -1) {

        setTimeout(function() {
            document.getElementsByClassName('leftArrow')[1].click();



        }, 3500)
    }
    if (window.location.href.indexOf("ship") > -1) {
        setTimeout(function() {
            document.getElementById('firstName').value = request.first;
            document.getElementById('shippingLastName').value = request.last;
            document.getElementById('shippingAddress1').value = request.address;
            document.getElementById('shippingAddress2').value = request.apt;
            document.getElementById('shippingCity').value = request.city;
            document.getElementsByTagName('select')[0].value = request.state; // Loop through selects
            document.getElementById('shippingZip').value = request.zipcode;
            document.getElementById('shippingPhone').value = request.phone;
            document.getElementById('email').value = request.email;
            document.getElementById('shippingContinue').click();
        }, 3500)
    }
    if (window.location.href.indexOf("ship.jsp?edit") > -1) {
        setTimeout(function() {
            document.getElementById('address_submit').click();
        }, 2000)
    }
    if (window.location.href.indexOf("bill.jsp") > -1) {
        setTimeout(function() {
            document.getElementById('billingCardNumber').value = request.cardnumber;
            document.getElementById('billingExpirationMonth').value = request.cardexpmonth;
            document.getElementById('billingExpirationYear').value = request.cardexpyear;
            document.getElementById('billingSecurityCode').value = request.cardcode;
            document.getElementById('js-review-order').click()
        }, 3000)
    }

    //test




});