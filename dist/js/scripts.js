$(document).ready(function() {
  $('select').niceSelect();
});


$(".option").on("click", function(){
	$(this).find("input").prop("checked", true);
	$(".option").removeClass("active");
	$(this).addClass("active");

	console.log($(this).find("input").data("id"));
});


$.getJSON('dist/js/cabins.js', function (data) {
    console.log(data.items[0]);
  });