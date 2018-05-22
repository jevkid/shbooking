function init(){
    var coachInput = document.getElementById('HolidayCoaches').getAttribute('value').replace(/'/g, '"');
    coachInput = JSON.parse(coachInput);
    var componentId = coachInput[0].ComponentID;

    var coaches = coachInput[0].SeatMapDetails;
    coaches.sort(function(a, b){
      return a.SeatId - b.SeatId;
    });

    var numPax = document.getElementById('TotalPassengers').getAttribute('value');
    var numSeats = coaches.length / 4;
  
    var count = 0;
    var selectedSeats = [];
    var pax;

    var availMap = {0: "Available", 1: "Unavailable", 2: "Toilet", 3: "Booked", 4: "Reserved"};
  
    for(var i = 1; i <= numSeats; i++){
      var li = document.createElement('li');
      var text = document.createTextNode(i);
      li.appendChild(text);
      li.setAttribute("class", "seatMap");
      document.getElementById('coachMap').appendChild(li);
    }
  
    for(var key in coaches){
      if(coaches.hasOwnProperty(key)){
        var li = document.createElement('li');
        var liClass = availMap[coaches[key].Status].toLowerCase();
        li.setAttribute("id", coaches[key].SeatNumber);
        li.setAttribute("data-coach-id", componentId);
        li.setAttribute("data-seat-id", coaches[key].SeatId);
        li.setAttribute("data-seat-num", coaches[key].SeatNumber);
        li.setAttribute("class", liClass);
        
        li.addEventListener('click', function(){
          pax = document.querySelector('[data-coach-pax]').getAttribute('data-coach-pax');
          pax = pax.split(',');
          count++;
          if(count <= numPax) {
            $('[data-pax-name]').text(pax[count]);
            document.querySelector('[data-pax-count]').removeAttribute('class', 'hidden');
            selectedSeats.push({
              coach: this.getAttribute('data-coach-id'), 
              seat: this.getAttribute('data-seat-id')
            });
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', (this.getAttribute('data-coach-id') + ',' + this.getAttribute('data-seat-id')));

            var seat = document.createElement('li');
            var summary = document.createElement('li');
            seat.setAttribute('class', 'seat');

            var text = document.createTextNode(pax[count-1] + ': ' + this.getAttribute('data-seat-num'));
            var summaryText = document.createTextNode(pax[count-1] + ': ' + this.getAttribute('data-seat-num'));
            
            seat.appendChild(text);
            summary.appendChild(summaryText);
            document.getElementById('customerMap').appendChild(seat);
            document.getElementById('customerMap').appendChild(input);
            document.getElementById('seatSummary').appendChild(summary);

            this.removeAttribute("class", "available");
            this.setAttribute("class", "selected");
  
            /* 
             TODO:
             Add additional look for selected element on hover
             Click to remove element
            */
          }
          if(count >= numPax) {
            $('[data-pax-name]').parents('p').addClass('hidden');
          }
        });
        if(coaches[key].SeatNumber.indexOf('A') > -1) {
          document.getElementById('coachMapA').appendChild(li);
        }
        if(coaches[key].SeatNumber.indexOf('B') > -1) {
          document.getElementById('coachMapB').appendChild(li);
        }
        if(coaches[key].SeatNumber.indexOf('C') > -1) {
          document.getElementById('coachMapC').appendChild(li);
        }
        if(coaches[key].SeatNumber.indexOf('D') > -1) {
          document.getElementById('coachMapD').appendChild(li);
        }
      }
    }
  }
  
  init();
