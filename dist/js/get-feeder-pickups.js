var secondinput = $("#FeederPickupCoaches").val();
var parse = JSON.parse(secondinput);

var counties = [];
var pickup = [];
var pickups = [];

$.each(parse[0].PickupPoints, function(i, item){
    counties.push(item.Address);
});

var removeDupes = $.unique(counties);

$.each(removeDupes, function(i, item){  
    $("#outward-county").append('<option data-value="">' + item + ' </option>').niceSelect('update');
});

var arr = [];

$.each(parse[0].PickupPoints, function (i, item) {
    arr.push({
        name: item.Name, 
        address:  item.Address
    });
}); 

$("#outward-county").on("change", function(){
    getPickups($(this).val());
});


function getPickups(inputCounty) {

    $("#pickupfromselect").find('option').remove().niceSelect('update');

    $.each(arr, function(i, el){
        var county = inputCounty;
    
        if( el.address == county ){
            $("#pickupfromselect").append('<option data-value="">' + el.name + '</option>').niceSelect('update').prop("disabled", false);
        }
    });
}

// $.each(parse[0].PickupPoints, function(i, item){
//     $("#pickupfromselect").append('<option data-value="' + item.PickupPointID + '">' + item.Name + ' (' + item.Address + ') </option>').niceSelect('update');
//     $("#dropoffselect").append('<option data-value="' + item.PickupPointID + '">' + item.Name + ' (' + item.Address + ') </option>').niceSelect('update');
// });

