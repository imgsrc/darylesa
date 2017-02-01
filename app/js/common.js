$(function () {

    //E-mail Ajax Send
    $('form').submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php', //Change
            data: th.serialize()
        }).done(function () {
            $('.form-callback .success').addClass('active');
            setTimeout(function () {
                // Done Functions
                $('.form-callback .success').removeClass('active');
                th.trigger('reset');
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });

    $('.s-adv').parallax();

    var offerItem = $('.offer-item');
    offerItem.each(function (e) {
        var th = $(this);
        th.attr('href', '#offer-' + e)
            .find('.offer-popup')
            .attr('id', 'offer-' + e);
    });
    offerItem.magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });


});
