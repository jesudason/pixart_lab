var colorInput = $('.color-input');

$('.set-color').click(function(event) {
	event.preventDefault()
	$('.brush').css( { backgroundColor: colorInput.val()});
});