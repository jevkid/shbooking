$(document).ready(function() {
  $('select').niceSelect();
});

var navigationToggle = function(isBackButton) {
	var currentStep, navText, step;
	/* Find each partial and see if it is hidden
	 * If it's not hidden, it's the current step 
	 */
	$('[data-step]').each(function(){
		if(!$(this).hasClass('hidden')){
			currentStep = $(this).data('step');
			/* Grab the "next" attribute from the current step, determining which is
			* the next step 
			*/
			navText = isBackButton ? $(this).prev().data('prev') : $(this).data('next');
		}
	});
	step = isBackButton ? (currentStep - 1) : (currentStep + 1);
	/* Find the current step and hide it. Increment the step, and
	 * remove the hidden class
	 */
	$('[data-step="' + currentStep + '"]').addClass('hidden');
	$('[data-step="' + step + '"]').removeClass('hidden');
	
	/* Remove the active class from the active navigation step, and add
	 * the active class to the new active step
	 */

	$('[data-nav-step]').removeClass('active');
	$('[data-nav-step="' + navText + '"]').addClass('active');

	// Don't show the back button the first page
	if(currentStep == 2 && isBackButton){
		$('[data-previous-step]').addClass('hidden');
	}

	// Scroll to the top of the page
	$('html, body').animate({ scrollTop: 0 }, 'slow');
};

var summaryToggle = function(){
	var section;
	$('[data-step]').each(function(){
		if(!$(this).hasClass('hidden')){
			section = $(this).prev().data('summaryId');
		}
	});
	$('#' + section).removeClass('hidden');
};

var updatePrice = function() {
	// TODO
};

$('html').on('click', '[data-current-step]', function() {
	$('[data-previous-step]').removeClass('hidden');
	navigationToggle();	
	summaryToggle();
	updatePrice();
});

$('html').on('click', '[data-previous-step]', function(e) {
	e.preventDefault();
	navigationToggle(true);
});

$(".option").on("click", function(){
	$(this).find("input").prop("checked", true);
	$(".option").removeClass("active");
	$(this).addClass("active");
});
	
$(function () {
	$('[data-toggle="tooltip"]').tooltip({
		html: true
	})
})
