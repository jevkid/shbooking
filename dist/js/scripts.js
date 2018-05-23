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
			navText = isBackButton ? $(this).prev().data('current') : $(this).data('next');
		}
	});
	step = isBackButton ? (currentStep - 1) : (currentStep + 1);
	
	if(currentStep == 8 && !isBackButton){
		
	}
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

	if(currentStep == 9){
		$(".continue-btn").prop("disabled", true);
		$(".continue-btn").click(function() { window.location='confirmation'; });
	}

	$('#agreepolicyandterms').on('ifChecked', function(event){
		$(".continue-btn").prop("disabled", false);
	});

	$('#agreepolicyandterms').on('ifUnchecked', function(event){
		$(".continue-btn").prop("disabled", true);
	});
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
			/* $('[data-pax-select]').each(function(){
			* 	var coachNum = $(this).data('paxSelect');
			* 	var input = '<input id="radio-' + paxId + '" type="radio" name="pax-select-' + coachNum + '" data-radio-pax="' + paxId + '" data-name="'+ forename + ' ' + surname +'" />';
			* 	$('[data-pax-select="' + coachNum + '"]').append('<li data-name="'+ forename + ' ' + surname +'">' + input + '<label for="radio-' + paxId + '">' + forename + ' ' + surname + '<span></span></label></li>');
			}); */
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

var accomToggle = function(section) {
	var groupNum = $('[data-summary-id="' +  section + '"]').find('[data-accom-group]').data('accomGroup');
	var group = $('[data-accom-group-id="' + groupNum + '"]');
	$(group).removeClass('hidden');	
	var accom;
	$('[data-accom-group="' + groupNum + '"]').find('input').each(function(){
		if($(this).is(':checked')){
			accom = $(this).val();
		}
	});

	if($('[data-group-room="' + groupNum + '"]').find('li').length <= 0){
		$(group).find('.list-title').text('Group/Room ' + groupNum );
		$('[data-group-room="' + groupNum + '"]').append('<li>' + accom + '</li>');
	} else {
		$('[data-group-room="' + groupNum + '"]').find('li').text(accom);
	}
};

var validateFields = function(parent){
	var isValid = true;
	parent.find('input').each(function(){
		var val = $(this).val();
		if((val === '' || !val || val === null) && $(this).data('validate') === 'required') {
			isValid = false;
		}
	});
	parent.find('select').each(function(){
		var selected = $(this).find(':selected').val();
		if((selected === '' || !selected || selected == 0) && $(this).data('validate') === 'required'){
			isValid = false;
		}
	});

	if(parent.find($('#customerMap')).length){
		var paxCount = $('[data-pax-count]').data('paxCount');
		if($('#customerMap').find('input').length < paxCount){
			isValid = false;
		}
	}

	return isValid;
};

var updatePrice = function() {
	// TODO
};

var summaryToggle = function(section, parent){

	if(section === 'party'){
		groupSummaryToggle(parent);
	}
	if(section === 'joining'){
		joiningToggle(parent);
	}
	if(section.indexOf('accom') >= 0){
		accomToggle(section, parent);
	}
	$('#' + section).removeClass('hidden');
};

$('html').on('click', '[data-nav-num]', function(){
	var isValid = $(this).data('active');
	var step = $(this).data('navNum');
	
	if(isValid){
		$('[data-nav-num]').removeClass('active');
		$(this).addClass('active');
		$('[data-step]').addClass('hidden');
		$('[data-step="' + step + '"]').removeClass('hidden');
	}	
});

$('html').on('click', '.add-to-booking', function(){
	var extra = $(this).siblings('.item-title').text();
	var num = $(this).parents('[data-accom-group]').data('accomGroup');
	$('[data-group-extras="' + num + '"]').append('<li>Extra: ' + extra + '</li>');
});

$('html').on('click', '[data-current-step]', function() {
	var parent;
	var form;
	var section;
	var stepNum;
	$('[data-step]').each(function(){
		if(!$(this).hasClass('hidden')){
			stepNum = $(this).data('step');
			section = $(this).data('summaryId');
			parent = $(this).find('[data-parent="group"]')
			form = $(this);
		}
	});
	var isValid = validateFields(form);
	if(isValid){
		$('[data-nav-num="' + stepNum + '"]').next().attr('data-active', true)
													.addClass('click-active');
		$('[data-alert]').addClass('hidden');
		$('[data-previous-step]').removeClass('hidden');
		navigationToggle(false);
		summaryToggle(section, parent);
		updatePrice();
	} else {
		$('[data-alert]').removeClass('hidden');
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

$(".enter-manually").on("click", function(){
	$(".enter-address-manually").removeClass("hidden");
	$(".enter-postcode-address").addClass("hidden");
});

$("section").data("id")

var passenger = [];
var passengers = [];


$("section").find($('[data-pax]')).each(function(){
	passengerID = $(this).data('pax');
	passengerTitle = $(this).find('[data-pax-id="title"]').val();
	passengerForename = $(this).find('[data-pax-id="forename"]').val();
	passengerSurname = $(this).find('[data-pax-id="surname"]').val();
	passengerGroup = $(this).parent().data('passenger-group');
	
	console.log(passengerForename);

	passenger['passengerID'] = passengerID;
	passenger['passengerTitle'] = passengerTitle;
	passenger['passengerForename'] = passengerForename;
	passenger['passengerSurname'] = passengerSurname;
	passenger['passengerGroup'] = passengerGroup;

	passengers.push(passenger);

});
console.log(passengers);


$('[data-action="open-requirements"]').on("click", function(){
	var requestedGuest = $(this).data("guest");

	$('[data-guest="' + requestedGuest + '"]').toggleClass("hidden");
});