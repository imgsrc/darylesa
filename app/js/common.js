$(function() {
    //Toggle mnu
    $('.toggle-mnu').on('click', function () {
        $(this).toggleClass('on');
        $(this).parent().next().next().find('.main-mnu').slideToggle();
        return false;
    });

    //E-mail Ajax Send
    $('form').submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php', //Change
            data: th.serialize()
        }).done(function() {
            $('.form-callback .success').addClass('active');
            setTimeout(function() {
                // Done Functions
                $('.form-callback .success').removeClass('active');
                th.trigger('reset');
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });



});
