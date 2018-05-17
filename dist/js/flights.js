$('html').on('change', '#outboundFlight', function() {
    var flightId = $(this).find(':selected').data('flightlink');
    $('.flightDetails').each(function(){
        if($(this).attr('id') == flightId){
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });

});
