$.getJSON('dist/js/cabins.json', function (data) {
	console.log(data.items[0]);
});


var active = $(".multi-options .option").find("input[type=radio]:checked").data("id");

$.getJSON('dist/js/cabins.json', function (data) {
    $(".accomm-desc .room-title").text(data.items[active].title);
    $(".accomm-desc .room-text").html(data.items[active].desc);
    $(".accomm-img img").attr("src",data.items[active].image);
});

$(".multi-options .option").on("click", function(){
    var selectedRoomCabin = $(this).find("input[type=radio]").data("id");
    
    console.log(selectedRoomCabin);

    $.getJSON('dist/js/cabins.json', function (data) {
        $(".accomm-desc .room-title").text(data.items[selectedRoomCabin].title);
        $(".accomm-desc .room-text").html(data.items[selectedRoomCabin].desc);
        $(".accomm-img img").attr("src",data.items[selectedRoomCabin].image);
    });

});