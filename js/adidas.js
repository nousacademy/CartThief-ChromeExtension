chrome.extension.onMessage.addListener(function(request, sender, response) {
    console.log(request)


    var sizes = document.querySelectorAll('[data-val]'); //document.getElementsByClassName('ffSelectMenuMid')[0].children[0].children

    for (var i = 0; i < sizes.length; i++) {
        var szEl = sizes[i];
        var szWanted = request.size;
        var szAvlble = sizes[i].innerHTML;

        if (szAvlble.indexOf(szWanted) >= 0) {
            szEl.click();

            document.querySelector('[name="add-to-cart-button"]').click();
            window.open('https://www.adidas.com/us/delivery-start', '_self');

        }
    }
    if (window.location.href.indexOf("delivery-start") > -1) {
        setTimeout(function() {
            document.getElementById('dwfrm_delivery_singleshipping_shippingAddress_addressFields_firstName').value = request.first;
            document.getElementById('dwfrm_delivery_singleshipping_shippingAddress_addressFields_lastName').value = request.last;
            document.getElementById('dwfrm_delivery_singleshipping_shippingAddress_addressFields_address1').value = request.address + ' ' + request.apt;
            document.getElementById('dwfrm_delivery_singleshipping_shippingAddress_addressFields_city').value = request.city;
            var state = document.querySelectorAll('[data-val]');
            for (var i = 0; i < state.length; i++) {
                console.log(state[i].getAttribute("data-val"))
                if (state[i].getAttribute("data-val") === request.state) {
                    state[i].click();
                }
            }
            document.getElementById('dwfrm_delivery_singleshipping_shippingAddress_addressFields_zip').value = request.zipcode;
            document.getElementById('dwfrm_delivery_singleshipping_shippingAddress_addressFields_phone').value = request.phone;
            document.getElementById('dwfrm_delivery_singleshipping_shippingAddress_email_emailAddress').value = request.email;
            document.getElementById('dwfrm_delivery_savedelivery').click();
        }, 3000)
    }

    if (window.location.href.indexOf("Summary-Start") > -1) {
        setTimeout(function() {
            var select = document.querySelectorAll('[data-val]');
            for (var i = 0; i < select.length; i++) {
                console.log(select[i].getAttribute("data-val"))
                if (select[i].getAttribute("data-val") === request.adidascardtype) {
                    select[i].click();
                }
                if (select[i].getAttribute("data-val") === request.cardexpmonth) {
                    select[i].click();
                }
                if (select[i].getAttribute("data-val") === request.adidascardexpyear) {
                    select[i].click();
                }
            }
            document.getElementById('dwfrm_payment_creditCard_number').value = request.cardnumber;
            document.getElementById('dwfrm_payment_creditCard_cvn').value = request.cardcvv;
            document.getElementsByClassName('place-order')[0].click()
        }, 3000)
    }
});