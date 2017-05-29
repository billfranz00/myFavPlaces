$(document).ready(function() {
	var $mainButton = $('#mainButton');

	$mainButton.on('click', function() {
		var $place = $('<td>', {
			text: $('#place').val()
		}),
		$rating = $('<td>',  {
			text: $('#rating').val()
		}),
		$deleteButton = $('<td>')
			.append($('<button>', {
				text: 'Delete',
				type: 'button'})
			.addClass('btn btn-danger')
			.on('click', function(e) {
				$(e.target)
				.parent()
				.parent()
				.remove()
			})),
		$tr = $('<tr>')
			.append($place)
			.append($rating)
			.append($deleteButton);
		$('tbody').append($tr);
		console.log($('#place').val())
	})

})