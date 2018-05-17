$('html').on('change', '#outboundFlight', function() {
    var flightId = $(this).find(':selected').data('flightlink');
    // console.log('flightId', flightId);
    $('.flightDetails').each(function(){
        // console.log('id', $(this).attr('id'));;
        // console.log(flightId == $(this).attr('id'));
        if($(this).attr('id') == flightId){
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });

});
