$(document).ready(function() {
  $('select').niceSelect();
});

$('input').iCheck({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue'
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

var groupSummaryToggle = function(groupParent) {
	var groupCount = 0;
	var group = [];
	$(groupParent).each(function(){
		groupCount++;
		var title, forename, surname, paxId;
		$('[data-group-id="' + groupCount + '"]').find('span').text('Group/Room: ' + groupCount);
		$(this).find($('[data-pax]')).each(function(){
			paxId = $(this).data('pax');
			title = $(this).find('[data-pax-id="title"]').val();
			forename = $(this).find('[data-pax-id="forename"]').val();
			surname = $(this).find('[data-pax-id="surname"]').val();
			$('[data-group-id="' + groupCount + '"]').find('[data-pax-num="' + paxId + '"]').text(title + ' ' + forename + ' ' + surname);
			group.push(forename + ' ' + surname);
		});
	});
	$('[data-pax-count]').attr('data-coach-pax', group);
	$('[data-pax-name]').text(group[0]);
};

var joiningToggle = function(groupParent){
	var options = $('[data-radio-option]');
	var checked;
	options.each(function(){
		if($(this).is(':checked')){
			checked = $(this).data('radioOption');
		}
		$('#join-type').text(checked);
	});
	
};

var coachToggle = function() {
	// TODO
};

var flightToggle = function() {
	// TODO
};

var accomToggle = function() {
	// TODO
};

var validateFields = function(parent){
	var isValid = true;
	parent.find('input').each(function(){
		var val = $(this).val();
		if(val === '' || !val || val === null) {
			isValid = false;
		}
	});

	return isValid;
};

var summaryToggle = function(section, parent){
	if(section === 'party'){
		groupSummaryToggle(parent);
	}
	if(section === 'joining'){
		joiningToggle(parent);
	}
	$('#' + section).removeClass('hidden');
};

var updatePrice = function() {
	// TODO
};

$('html').on('click', '[data-current-step]', function() {
	var parent;
	var form;
	var section;
	$('[data-step]').each(function(){
		if(!$(this).hasClass('hidden')){
			section = $(this).data('summaryId');
			parent = $(this).find('[data-parent="group"]')
			form = $(this);
		}
	});
	var isValid = validateFields(form);
	if(isValid){
		$('[data-previous-step]').removeClass('hidden');
		navigationToggle(false);
		summaryToggle(section, parent);
		updatePrice();
	} else {
		// TODO
	}
});

$('html').on('click', '[data-previous-step]', function(e) {
	e.preventDefault();
	navigationToggle(true);
});

$(".option").on("click", function(){
	$(this).find("input").iCheck('check');
	$(".option").removeClass("active");
	$(this).addClass("active");
});
	
$(function () {
	$('[data-toggle="tooltip"]').tooltip({
		html: true
	})
});
