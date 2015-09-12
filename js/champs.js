chrome.extension.onMessage.addListener(function(request, sender, response) {
    console.log(request)
    var cart = document.getElementsByClassName('cart_count')[0].innerText;
    var cartAmnt = parseInt(cart);
    if (cartAmnt < 1) {
        var nav = document.getElementById('header_nav').children[1].click();
        document.getElementsByClassName('overlay_close')[0].click(); // close ad

        var date = document.getElementsByClassName('date');

        for (i = 0; i < date.length; i++) {

            var dateFltr = date[i];
            var dateTxt = dateFltr.innerHTML;
            var trgtDate = '07/30/2015';

            if (dateTxt.indexOf(trgtDate) >= 0) {

                var kick = dateFltr.nextSibling.innerHTML;
                var kickWanted = 'LeBron 12';

                if (kick.indexOf(kickWanted) >= 0) {
                    dateFltr.click();


                    setTimeout(function() {
                        var sizeBtn = document.querySelectorAll("[data-href]")[0];
                        sizeBtn.click();
                        var sizes = document.querySelectorAll("[data-modelsize]");

                        for (i = 0; i < sizes.length; i++) {
                            var szEl = sizes[i];
                            var szWanted = request.size;
                            var szAvlble = sizes[i].innerHTML;
                            if (szAvlble.indexOf(szWanted) >= 0) {
                                szEl.click();
                                document.querySelectorAll("[data-addmodel]")[0].click();
                                setTimeout(function() {
                                    document.getElementsByClassName('checkout_btn')[0].children[0].click()

                                }, 2000)

                            }

                        }

                    }, 4000);



                }


            }
        }


    }




    //test

    if (window.location.href.indexOf("checkout") > -1) {
        console.log('here')
        setTimeout(function() {
            document.getElementById('loginPaneNewUser').click();
            // testing!!!
        }, 3000);
        setTimeout(function() {
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

        }, 5000)

    }

    //test
});