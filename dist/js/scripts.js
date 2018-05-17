$(document).ready(function() {
  $('select').niceSelect();
});

$('html').on('click', '[data-current-step]', function() {
	var currentStep = $(this).data('currentStep');
	var nextNav = $('[data-step="' + currentStep + '"]').data('next');

	$('[data-step="' + currentStep + '"]').addClass('hidden');	
	var nextStep = currentStep + 1;
	$('[data-step="' + nextStep + '"]').removeClass('hidden');
	$(this).data('currentStep', nextStep);

	$('[data-nav-step]').removeClass('active');
	$('[data-nav-step="' + nextNav + '"]').addClass('active');

	$('html, body').animate({ scrollTop: 0 }, 'slow');
});

$(".option").on("click", function(){
	$(this).find("input").prop("checked", true);
	$(".option").removeClass("active");
	$(this).addClass("active");

	console.log($(this).find("input").data("id"));
});


$.getJSON('dist/js/cabins.js', function (data) {
    // console.log(data.items[0]);
	});
	
$(function () {
	$('[data-toggle="tooltip"]').tooltip({
		html: true
	})
})
