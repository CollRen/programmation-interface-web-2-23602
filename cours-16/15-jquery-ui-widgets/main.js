$(window).on('load', function() {

    /**
     * Accordeon
     */
    $('#accordion').accordion();
    // $('.fakewindowcontain .ui-widget-overlay').css('position', 'absolute');    // => Définir en CSS


    /**
     * Autocomplete
     */
    let availableTags = [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme'
    ];

    $('#autocomplete').autocomplete({
        source: availableTags
    });


    /**
     * Datepicker
     */
    $('#datepicker').datepicker({
        inline: true
    });


    /**
     * Dialog
     */
    $('#dialog').dialog({
        autoOpen: false,
        width: 400,
        buttons: [
            {
                text: 'Ok',
                click: function() {
                    $( this ).dialog( 'close');
                }
            },
            {
                text: 'Cancel',
                click: function() {
                    $( this ).dialog( 'close');
                }
            }
        ]
    });

    $('#dialog-link').on('click', function( event ) {
        $('#dialog').dialog( 'open');
        event.preventDefault();
    });


    /**
     * Menu
     */
    $('#menu').menu();


    /**
     * Progressbar
     */
    $('#progressbar').progressbar({
        value: 70
    });


    /**
     * Slider
     */
    $('#slider').slider({
        range: true,
        values: [ 17, 67 ]
    });


    /**
     * Slider
     */
    $('#tabs').tabs();


    /**
     * Tooltip
     */
    $('#tooltip').tooltip();

    $('#dialog-link, #icons li').hover(
        function() {
            $( this ).addClass( 'ui-state-hover');
        },
        function() {
            $( this ).removeClass( 'ui-state-hover');
        }
    );
    
});