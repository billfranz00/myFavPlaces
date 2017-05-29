$(document).ready(function() {
	var $mainButton = $('#mainButton'),
		$placeUp = $('#placeUp'),
		$placeDown = $('#placeDown'),
		$ratingUp = $('#ratingUp'),
		$ratingDown = $('#ratingDown');

	$mainButton.on('click', function() {
		var $place = $('<td>', {
			text: $('#place').val()
		}).addClass('place'),
		$rating = $('<td>',  {
			text: $('#rating').val()
		}).addClass('rating'),
		$deleteButton = $('<td>')
			.append($('<button>', {
				text: 'Delete',
				type: 'button'})
			.addClass('btn btn-danger')
			.on('click', function(e) { // event which removes row in which delete button is located
				$(e.target)
				.parent()
				.parent()
				.remove()
			})
		),
		$tr = $('<tr>')
			.append($place)
			.append($rating)
			.append($deleteButton);
		$('tbody').append($tr);
		console.log($('#place').val())
	})

	$placeUp.on('click', function() {
		var placeSort = $('tbody tr').map(function(i, el) {
			return $(el).find('.place').text()
		})
		console.log(placeSort)
		placeSort.sort()
		console.log(placeSort)
	})

})