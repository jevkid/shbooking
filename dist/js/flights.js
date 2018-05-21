$('html').on('change', '#outboundFlight', function() {
    var flightId = $(this).find(':selected').data('flightlink');
    var flightSummary = $(this).find(':selected').text();
    $('#flight-summary').find('li').text(flightSummary);
    $('.flightDetails').each(function(){
        if($(this).attr('id') == flightId){
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });
});
