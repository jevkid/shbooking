function init(){
    var coaches = [
      {
        coachId: "67", seatId: "101720", seatNumber: "10A", status: "Available", row: "10", seatInRow: "4" 
      },
      {
        coachId: "67", seatId: "101719", seatNumber: "10B", status: "Available", row: "10", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101718", seatNumber: "10C", status: "Available", row: "10", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101717", seatNumber: "10D", status: "Available", row: "10", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101724", seatNumber: "11A", status: "Available", row: "11", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101723", seatNumber: "11B", status: "Available", row: "11", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101722", seatNumber: "11C", status: "Available", row: "11", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101721", seatNumber: "11D", status: "Available", row: "11", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101728", seatNumber: "12A", status: "Available", row: "12", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101727", seatNumber: "12B", status: "Available", row: "12", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101726", seatNumber: "12C", status: "Available", row: "12", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101725", seatNumber: "12D", status: "Available", row: "12", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101732", seatNumber: "13A", status: "Available", row: "13", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101731", seatNumber: "13B", status: "Available", row: "13", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101730", seatNumber: "13C", status: "Available", row: "13", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101729", seatNumber: "13D", status: "Available", row: "13", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101684", seatNumber: "1A", status: "Reserved", row: "1", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101683", seatNumber: "1B", status: "Reserved", row: "1", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101682", seatNumber: "1C", status: "Vantage", row: "1", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101681", seatNumber: "1D", status: "Vantage", row: "1", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101688", seatNumber: "2A", status: "Reserved", row: "2", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101687", seatNumber: "2B", status: "Reserved", row: "2", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101686", seatNumber: "2C", status: "Reserved", row: "2", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101685", seatNumber: "2D", status: "Reserved", row: "2", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101692", seatNumber: "3A", status: "Available", row: "3", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101691", seatNumber: "3B", status: "Available", row: "3", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101690", seatNumber: "3C", status: "Available", row: "3", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101689", seatNumber: "3D", status: "Available", row: "3", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101696", seatNumber: "4A", status: "Reserved", row: "4", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101695", seatNumber: "4B", status: "Reserved", row: "4", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101694", seatNumber: "4C", status: "Available", row: "4", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101693", seatNumber: "4D", status: "Available", row: "4", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101700", seatNumber: "5A", status: "Available", row: "5", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101699", seatNumber: "5B", status: "Available", row: "5", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101698", seatNumber: "5C", status: "Reserved", row: "5", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101697", seatNumber: "5D", status: "Reserved", row: "5", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101704", seatNumber: "6A", status: "Available", row: "6", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101703", seatNumber: "6B", status: "facility", row: "6", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101702", seatNumber: "6C", status: "Available", row: "6", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101701", seatNumber: "6D", status: "Available", row: "6", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101708", seatNumber: "7A", status: "Available", row: "7", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101707", seatNumber: "7B", status: "Available", row: "7", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101706", seatNumber: "7C", status: "Available", row: "7", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101705", seatNumber: "7D", status: "Available", row: "7", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101712", seatNumber: "8A", status: "Available", row: "8", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101711", seatNumber: "8B", status: "Available", row: "8", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101710", seatNumber: "8C", status: "Available", row: "8", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101709", seatNumber: "8D", status: "Available", row: "8", seatInRow: "1"
      },
      {
        coachId: "67", seatId: "101716", seatNumber: "9A", status: "Available", row: "9", seatInRow: "4"
      },
      {
        coachId: "67", seatId: "101715", seatNumber: "9B", status: "Available", row: "9", seatInRow: "3"
      },
      {
        coachId: "67", seatId: "101714", seatNumber: "9C", status: "Available", row: "9", seatInRow: "2"
      },
      {
        coachId: "67", seatId: "101713", seatNumber: "9D", status: "Available", row: "9", seatInRow: "1"
      }
    ];
    
    coaches.sort(function(a, b){
      return a.seatId - b.seatId;
    });

    var numPax = document.querySelector('[data-pax]').getAttribute('data-pax');
    var numSeats = coaches.length / 4;
  
    var count = 0;
    var selectedSeats = [];
  
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
        var liClass = coaches[key].status.toLowerCase();
        li.setAttribute("id", coaches[key].seatNumber);
        li.setAttribute("data-coach-id", coaches[key].coachId);
        li.setAttribute("data-seat-id", coaches[key].seatId);
        li.setAttribute("data-seat-num", coaches[key].seatNumber);
        li.setAttribute("class", liClass);
        
        li.addEventListener('click', function(){
          count++;
  
          if(count <= numPax) {
            document.querySelector('[data-pax]').removeAttribute('class', 'hidden');
            selectedSeats.push({
              coach: this.getAttribute('data-coach-id'), 
              seat: this.getAttribute('data-seat-id')
            });
            var seat = document.createElement('li');
            seat.setAttribute('class', 'seat');
            var text = document.createTextNode('Passenger ' + count + ': ' + this.getAttribute('data-seat-num'));
            seat.appendChild(text);
            document.getElementById('customerMap').appendChild(seat);
    
            this.removeAttribute("class", "available");
            this.setAttribute("class", "selected");
  
            /* 
             TODO:
             Add additional look for selected element on hover
             Click to remove element
            */
          }
        });
        if(coaches[key].seatNumber.indexOf('A') > -1) {
          document.getElementById('coachMapA').appendChild(li);
        }
        if(coaches[key].seatNumber.indexOf('B') > -1) {
          document.getElementById('coachMapB').appendChild(li);
        }
        if(coaches[key].seatNumber.indexOf('C') > -1) {
          document.getElementById('coachMapC').appendChild(li);
        }
        if(coaches[key].seatNumber.indexOf('D') > -1) {
          document.getElementById('coachMapD').appendChild(li);
        }
      }
    }
  }
  
  init();
  