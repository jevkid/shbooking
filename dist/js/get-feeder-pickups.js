 var secondinput = $("#FeederPickupCoaches").val();
 var parse = JSON.parse(secondinput);

$.each(parse[0].PickupPoints, function(i, item){
    console.log(item.Name);
    $("#pickupfromselect").append('<option data-value="' + item.PickupPointID + '">' + item.Name + ' (' + item.Address + ') </option>').niceSelect('update');
    $("#dropoffselect").append('<option data-value="' + item.PickupPointID + '">' + item.Name + ' (' + item.Address + ') </option>').niceSelect('update');
});