$(window).on('load', function() {


    $('button').on('click', function () {

        $('button').prop('disabled', true);
        $('.square').animate({

            backgroundColor: 'red',
            borderColor: 'red',
            height: '400',
            width: '400'
        }, 1000, function() {
            $('.square').animate({
                backgroundColor: 'blue',
                borderColor: 'blue',
                height: '100',
                width: '100'
        }, 2000, function() {
            $('button').prop('disabled', false);
        })})
    })


});