// Hidden input with coach JSON
var coachInput = $('#HolidayCoaches').val().replace(/'/g, '"');
// Parse the JSON
coachInput = JSON.parse(coachInput);
// Hidden input with the number of passengers
var numPax = $('#TotalPassengers').val();
var selectedSeats = {};

// Travelink returns seat availability as an int, so we have to map it to the correct type
var availMap = {0: "Available", 1: "Unavailable", 2: "Toilet", 3: "Booked", 4: "Reserved"};

for(var i = 0; i < coachInput.length; i++){    
    // The component ID needs to be sent to the BE
    componentId = coachInput[i].ComponentID;
    // The seats are stored in seat-mapDetails
    coaches = coachInput[i].SeatMapDetails;
    // Sort the seats so that they appear correctly on the map
    coaches.sort(function(a, b){
      return a.SeatId - b.SeatId;
    });
    // Each coach has 4 aisles of seats
    var numSeats = coaches.length / 4;

    for(var j = 1; j <= numSeats; j++){
        $('#coachMap-' + (i + 1)).append('<li class="seat-map">' + j + '</li>');
    }

    for(var key in coaches){
        // The coach we are adding seats to
        var coachNumber = (i + 1);
        var currentPax;
        if(coaches.hasOwnProperty(key)){            
            selectedSeats[i+1] = [];
            // The status of each seat based on the pre-defined mapping
            var seatClass = availMap[coaches[key].Status].toLowerCase();
            // Add attributes to each "seat" to grab the data from them later on
            // Store the coach count on each seat
            var seatNum = coaches[key].SeatNumber;
            var seatId = coaches[key].SeatId;
            if(seatNum === "1A" || seatNum === "1B" || seatNum === "1C" || seatNum === "1D"){
                seatClass += " vantage";
            }
            var li = '<li id="' + seatNum + '" data-component-id="' + componentId + '" data-seat-id="' + seatId + '" data-seat-num="' + seatNum + '" data-count="' + coachNumber + '" class="li-seat ' + seatClass +'"></li>';
            if(seatNum.indexOf('A') > -1) {
                $('#coachMapA-' + (i + 1)).append(li);
            }
            if(seatNum.indexOf('B') > -1) {
                $('#coachMapB-' + (i + 1)).append(li);
            }
            if(seatNum.indexOf('C') > -1) {
                $('#coachMapC-' + (i + 1)).append(li);
            }
            if(seatNum.indexOf('D') > -1) {
                $('#coachMapD-' + (i + 1)).append(li);
            }
        }
    }
}

$('html').on('click', '[data-seat-num]', function(){
    var $this = $(this);
    // Gets which coach to use
    var coachCount = $this.data('count');
    currentPax = (selectedSeats[coachCount].length + 1);
    if(($this.hasClass('available') || $this.hasClass('vantage')) && !$this.hasClass('selected') && (numPax >= currentPax)) {
        /* var paxName = $('[data-radio-pax]').data('name'); */
        // Store the selected eat information
        var component = $this.data('componentId');
        var seatId = $this.data('seatId');
        var uniqueId = component + '-' + seatId;
         // Create the hidden input
        var input = '<input type="hidden" value="' + component + ',' + seatId + '" data-remove-field="' + uniqueId + '"/>';
        var seatText = 'Seat ' + $this.data('seatNum');
        selectedSeats[coachCount].push(uniqueId);
        var seat = '<li class="seat" data-remove-field="' + uniqueId + '">' + seatText + '</li>';
        // var summary = '<li>' + seatText + '</li>';

        $('.customer-select').removeClass('hidden');
        $('#customerMap-' + coachCount).append(seat);
        $('#customerMap-' + coachCount).append(input);

        //  $('#seatSummary-' + coachCount).append(summary);
        $this.removeClass('available')
             .addClass('selected')
             .attr('data-remove-seat', uniqueId);
    }
});

$('html').on('click', '[data-remove-seat]', function(){
    var $this = $(this);
    $(this).removeClass('selected')
           .addClass('available');
    var id = $(this).data('removeSeat');
    var matchingFields = $('[data-remove-field="' + id + '"]');
    $(matchingFields).each(function(){
        $(this).remove();
    });
    var count = $this.data('count');
    selectedSeats[count].splice(selectedSeats[count].indexOf(id), 1);
    // Don't put the stuff in summary until progressing to next page

    $this.removeAttr('data-remove-seat');
});
