$(window).on('load', function() {

    /**
     * Draggable
     */
    $('#draggable').draggable();

    $('#draggable-droppable').draggable();
    $('#droppable').droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass('ui-state-highlight')
            .find('p')
            .html('Dropped!');
        }
    });


    /**
     * Resizable
     */
    $('#resizable').resizable();


    /**
     * Selectable
     */
    $('#selectable').selectable();


    /**
     * Sortable
     */
    $('#sortable').sortable();
    $('#sortable').disableSelection();
    
});