function init(){
    var coachInput = document.getElementById('HolidayCoaches').getAttribute('value').replace(/'/g, '"');
    coachInput = JSON.parse(coachInput);
    var numPax = document.getElementById('TotalPassengers').getAttribute('value');
    var pax, componentId, coaches;
    var selectedSeats = [];
    var input, seat, summary, text, summaryText;
    var count = [];
  
    for(var i = 0; i < coachInput.length; i++){
      componentId = coachInput[i].ComponentID;
      coaches = coachInput[i].SeatMapDetails;
      coaches.sort(function(a, b){
        return a.SeatId - b.SeatId;
      });

      var numSeats = coaches.length / 4;
  
      var availMap = {0: "Available", 1: "Unavailable", 2: "Toilet", 3: "Booked", 4: "Reserved"};
    
      for(var j = 1; j <= numSeats; j++){
        var li = document.createElement('li');
        var text = document.createTextNode(j);
        li.appendChild(text);
        li.setAttribute("class", "seatMap");
        document.getElementById('coachMap-' + (i + 1)).appendChild(li);
      }

      for(var key in coaches){
        var coachNum = (i + 1);
        if(coaches.hasOwnProperty(key)){
          var li = document.createElement('li');
          var liClass = availMap[coaches[key].Status].toLowerCase();
          // Add attributes to each "seat" to grab the data from them later on
          li.setAttribute("id", coaches[key].SeatNumber);
          li.setAttribute("data-coach-id", componentId);
          li.setAttribute("data-seat-id", coaches[key].SeatId);
          li.setAttribute("data-seat-num", coaches[key].SeatNumber);
          // Store the coach count on each seat
          li.setAttribute("data-count", coachNum);
          li.setAttribute("class", liClass);
          
          li.addEventListener('click', function(){
            // This grabs the names of the passengers from the group summary
            pax = document.querySelector('[data-coach-pax]').getAttribute('data-coach-pax');
            pax = pax.split(',');
            // Gets which coach to use
            var coachCount = this.getAttribute('data-count');
            // Counts how many customers have been added to the coach already
            var count = $('#customerMap-' + coachCount).children('li').length;
            if(count < numPax) {
              // Grabs the passenger name and appends it to the "Your Seats" bit
              $('[data-pax-name]').text(pax[count + 1]);
              // Show the "Your Seats" bit for the correct coach
              $('#customerSelect-' + coachCount).removeClass('hidden');
              // Store the selected eat information
              selectedSeats.push({
                coach: this.getAttribute('data-coach-id'), 
                seat: this.getAttribute('data-seat-id')
              });
              // Create the hidden input
              input = document.createElement('input');
              input.setAttribute('type', 'hidden');
              input.setAttribute('value', (this.getAttribute('data-coach-id') + ',' + this.getAttribute('data-seat-id')));
              
              seat = document.createElement('li');
              summary = document.createElement('li');
              seat.setAttribute('class', 'seat');
  
              text = document.createTextNode(pax[count] + ': ' + this.getAttribute('data-seat-num'));
              summaryText = document.createTextNode(pax[count] + ': ' + this.getAttribute('data-seat-num'));
              
              seat.appendChild(text);
              summary.appendChild(summaryText);
              document.getElementById('customerMap-' + coachCount).appendChild(seat);
              document.getElementById('customerMap-' + coachCount).appendChild(input);
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
            document.getElementById('coachMapA-' + (i + 1)).appendChild(li);
          }
          if(coaches[key].SeatNumber.indexOf('B') > -1) {
            document.getElementById('coachMapB-' + (i + 1)).appendChild(li);
          }
          if(coaches[key].SeatNumber.indexOf('C') > -1) {
            document.getElementById('coachMapC-' + (i + 1)).appendChild(li);
          }
          if(coaches[key].SeatNumber.indexOf('D') > -1) {
            document.getElementById('coachMapD-' + (i + 1)).appendChild(li);
          }
        }
      }
    }
  }
  
  init();
