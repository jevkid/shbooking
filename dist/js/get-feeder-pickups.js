var input = [  
    {  
       "ComponentID":3959,
       "CoachID":68,
       "Duration":0,
       "TourMasterPricingTypeId":338,
       "DayOfOperation":1,
       "StartDate":"2018-05-21T00:00:00",
       "CoachName":"Bournemouth",
       "CoachCode":"EMB11O",
       "Available":48,
       "SelectionState":1,
       "SeatSelectionAllowed":false,
       "IsHolidayCoach":false
    }
 ];

 var secondinput = $("#FeederPickupCoaches").val();
 var parse = JSON.parse(secondinput);



console.log(parse[0].PickupPoints);

$.each(parse[0].PickupPoints, function(i, item){
    console.log(item.Name);
    $("#pickupfromselect").append('<option data-value="' + item.PickupPointID + '">' + item.Name + ' (' + item.Address + ') </option>').niceSelect('update');
});