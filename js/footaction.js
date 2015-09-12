chrome.extension.onMessage.addListener(function(request, sender, response) {
    console.log(request)
    //console.log(request[i])
    

    var sizes = document.getElementsByClassName('available'); // obj list

    //document.getElementsByClassName('cta_button')[0].onclick = null // must inject this script

    for (i = 0; i < sizes.length; i++) {
        var szEl = sizes[i];
        var szWanted = request.size;
        var szAvlble = sizes[i].innerHTML;

        if (szAvlble.indexOf(szWanted) >= 0) {
            
            szEl.click();
            
            document.getElementsByClassName('cta_button')[0].click();
            //window.open('http://www.footaction.com/shoppingcart/default.cfm?', '_self')



        }

    }

    if (window.location.href.indexOf("default.cfm") > -1) {
        setTimeout(function() {
            document.getElementsByClassName('quantity')[0].value = '1'
            document.querySelector('[title="Checkout Button"]').click()
        }, 5000);
    }
    if (window.location.href.indexOf("checkout") > -1) {
        //same shit as all the others see eastbay
        if (document.getElementById('billAddressPane_edit').style.display === "block") {

            document.getElementById("billFirstName").value = request.first;
            document.getElementById("billLastName").value = request.last;
            document.getElementById("billAddress1").value = request.address;
            document.getElementById("billPostalCode").value = request.zipcode;
            document.querySelector('[name="billCity"]').value = request.city;
            document.getElementsByTagName('select')[1].value = request.state; // Loop through selects
            document.querySelector('[name="billHomePhone"]').value = request.phone;
            document.querySelector('[name="billEmailAddress"]').value = request.email;
            document.querySelector('[name="billConfirmEmail"]').value = request.email;
            document.getElementById("billPaneContinue").click() //goes to next
            setTimeout(function() {
                document.getElementById('address_verification_use_original_button').click()
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
                                    }, 3000)
                                }
                            }, 3000)

                        }
                    }, 3000)

                }
            }, 3000)

        }
        //test
    }

});

//works