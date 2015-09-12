chrome.extension.onMessage.addListener(function(request, sender, response) {

    console.log(request.size)




    //works
    var sizes = document.getElementsByClassName('size_button'); // obj list


    for (i = 0; i < sizes.length; i++) {
        var szEl = sizes[i];
        var szWanted = request.size;
        var szAvlble = sizes[i].innerHTML;
        //console.log(szAvlble)
        if (szAvlble.indexOf(szWanted) >= 0) {
            szEl.click();

            //next();

            var add2cart = document.getElementById('add_to_cart');
            add2cart.click();
            window.open('http://www.eastbay.com/shoppingcart/default.cfm?sku=', '_self');
        }

    }

    if (window.location.href.indexOf("shoppingcart") > -1) {
        setTimeout(function() {
            document.getElementById('cart_checkout_button').click();
        }, 1500)
    }

    if (window.location.href.indexOf("checkout") > -1) {
        document.getElementById('loginPaneNewUser').click();
    }


    setTimeout(function() {
        if (document.getElementById('billAddressPane_edit').style.display === "block") {

            document.getElementById("billFirstName").value = request.first;
            document.getElementById("billLastName").value = request.last;
            document.getElementById("billAddress1").value = request.address;
            document.getElementById("billAddress2").value = request.apt;
            document.getElementById("billPostalCode").value = request.zipcode;
            document.querySelector('[name="billCity"]').value = request.city;
            document.getElementsByTagName('select')[1].value = request.state; // Loop through selects
            document.querySelector('[name="billHomePhone"]').value = request.phone;
            document.querySelector('[name="billEmailAddress"]').value = request.email;
            document.querySelector('[name="billConfirmEmail"]').value = request.email;
            document.getElementById("billPaneContinue").click() //goes to next
            setTimeout(function() {
                //                if(document.getElementById('address_verification_use_original_button').length) {
                //                    document.getElementById('address_verification_use_original_button').click()
                //                }
                if (document.getElementById("shipAddressPane_edit").style.display === "block") {
                    document.getElementById("shipPaneContinue").click() //goes to next
                    setTimeout(function() {
                        if (document.getElementById("shipMethodPane_edit").style.display === "block") {
                            document.getElementById("shipMethodPaneContinue").click() //goes to next
                            setTimeout(function() {
                                if (document.getElementById("paymentMethodPane_edit").style.display === "block") {

                                    if (request.cardtype === "VISA") {
                                        document.getElementById('cardVISA').click();
                                    }
                                    if (request.cardtype === "MASTERCARD") {
                                        document.getElementById('cardMC').click();
                                    }
                                    if (request.cardtype === "AMEX") {
                                        document.getElementById('cardAMEX').click();
                                    }
                                    if (request.cardtype === "DISCOVER") {
                                        document.getElementById('cardDISC').click();
                                    }
                                    document.getElementById('payMethodPaneCardNumber').value = request.cardnumber; // card num
                                    document.getElementsByTagName('select')[8].value = request.cardexpmonth; // 1 - 21 values
                                    document.getElementsByTagName('select')[9].value = request.cardexpyear; // year 15 - 28 values
                                    document.getElementById('payMethodPaneCVV').value = request.cardcvv; // CVV code
                                    document.getElementById('payMethodPaneContinue').click() // submit
                                    setTimeout(function() {
                                        if (document.getElementById("orderReviewPane_edit").style.display === "block") {
                                            document.getElementById('orderSubmit').click();
                                        }
                                    }, 4000)
                                }
                            }, 3000)

                        }
                    }, 3000)

                }
            }, 3000)

        }

    }, 5000)


    if (window.location.href.indexOf('orderReceipt') > -1) {
    
    }



    //works

});