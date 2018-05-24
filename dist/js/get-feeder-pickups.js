var FeederPickupCoaches = $("#FeederPickupCoaches").val();
var FeederDropoffCoaches = $("#FeederDropoffCoaches").val();
var parsePickup = JSON.parse(FeederPickupCoaches);
var parseDropoff = JSON.parse(FeederDropoffCoaches);

var counties = [];
var pickup = [];
var pickups = [];
var dropOffCounties = [];

$.each(parsePickup[0].PickupPoints, function(i, item){
    counties.push(item.Address);
});

var removeDupes = $.unique(counties);

$.each(removeDupes, function(i, item){  
    $("#pickup-county").append('<option data-value="">' + item.toLowerCase() + ' </option>').niceSelect('update');
});

$.each(parseDropoff[0].PickupPoints, function(i, item){
    dropOffCounties.push(item.Address);
});

var removeDropoffDupes = $.unique(dropOffCounties);

$.each(removeDropoffDupes, function(i, item){  
    $("#dropoff-county").append('<option data-value="">' + item.toLowerCase() + ' </option>').niceSelect('update');
});

var pickupsArr = [];
var dropOffs = [];

$.each(parsePickup[0].PickupPoints, function (i, item) {
    pickupsArr.push({
        name: item.Name, 
        address:  item.Address
    });
}); 

$.each(parseDropoff[0].PickupPoints, function(i, item){
    dropOffs.push({
        name: item.Name,
        address: item.Address
    });
});

$("#pickup-county").on("change", function(){
    returnPickups($(this).val(),pickupsArr,$("#pickupfromselect"));
});

$("#dropoff-county").on("change", function(){
    returnPickups($(this).val(),dropOffs,$("#dropoffselect"));
});

function returnPickups(inputCounty, array, postback) {
    
    postback.find('option').remove().niceSelect('update');

    $.each(array, function(i, el){
        var county = inputCounty.toLowerCase();
    
        if( el.address.toLowerCase() == county ){
            postback.append('<option data-value="">' + el.name + '</option>').niceSelect('update').prop("disabled", false);
        }
    });
}