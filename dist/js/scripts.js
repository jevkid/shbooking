$(document).ready(function() {
  $('select').niceSelect();
});

$('html').on('click', '[data-current-step]', function() {
	$('[data-previous-step]').removeClass('hidden');
	var currentStep;
	$('[data-step]').each(function(){
		if(!$(this).hasClass('hidden')){
			currentStep = $(this).data('step');
		}
	});
	var nextNav = $('[data-step="' + currentStep + '"]').data('next');

	$('[data-step="' + currentStep + '"]').addClass('hidden');	
	var nextStep = currentStep + 1;
	$('[data-step="' + nextStep + '"]').removeClass('hidden');

	$('[data-nav-step]').removeClass('active');
	$('[data-nav-step="' + nextNav + '"]').addClass('active');

	$('html, body').animate({ scrollTop: 0 }, 'slow');
});

$('html').on('click', '[data-previous-step]', function(e) {
	e.preventDefault();
	// Find current step
	var currentStep;
	var prevNav;
	$('[data-step]').each(function(){
		if(!$(this).hasClass('hidden')){
			currentStep = $(this).data('step');
			prevNav = $(this).prev().data('prev');
		}
	});
	// Hide current step
	$('[data-step="' + currentStep + '"]').addClass('hidden');
	$('[data-step="' + (currentStep - 1) + '"]').removeClass('hidden');
	// Show next step
	$('[data-nav-step]').removeClass('active');
	$('[data-nav-step="' + prevNav + '"]').addClass('active');
	// Make sure to hide if step === 1
	if(currentStep == 2){
		$(this).addClass('hidden');
	}
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
