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

	$placeUp.on('click', sortPlaces)
	$placeDown.on('click', sortPlaces)
	$ratingUp.on('click', sortRatings)
	$ratingDown.on('click', sortRatings)

	// Function for sorting places
	function sortPlaces() {
		var places = $('tbody tr').map(function(i, el) {
			return $(el)
					.find('.place')
					.text()
					.toLowerCase()
		}); // --> array with names of places
		var placeObj = {};
		$('tbody tr').each(function(i, el) {
			placeObj[$(el)
				.find('.place')
				.text()
				.toLowerCase()] = $(el);
		}) // --> Object containing every row
		var placeSort;
		if(this.id === 'placeUp') {
			placeSort = places.sort();	
		}
		else {
			placeSort = places.sort(function(a, b) {
				return a < b;
			});
			console.log(placeSort)
		} // --> sorted array with names of places
		var newOrder = placeSort.map(function(i, el) {
			return placeObj[el]
		}) // --> sorted array of rows
		newOrder.each(function(i, el) {
			$('tbody').append($(el));
		}) // append the sorted rows to the body
	}

	
	// Function for sorting the ratings
	function sortRatings() {
		var ratings = $('tbody tr').map(function(i, el) {
			return $(el)
					.find('.rating')
					.text()
		}); // --> array with ratings
		var ratingObj = {};
		$('tbody tr').each(function(i, el) {
			ratingObj[$(el)
						.find('.rating')
						.text()] = $(el);
		}) // --> Object containing every row
		var ratingSort;
		if(this.id === 'ratingUp') {
			ratingSort = ratings.sort(function(a, b) {
				return a - b;
			})
		}
		else {
			ratingSort = ratings.sort(function(a, b) {
				return b - a;
			})
		} // --> sorted array with names of places
		var newOrder = ratingSort.map(function(i, el) {
			return ratingObj[el]
		})// --> sorted array of rows
		newOrder.each(function(i, el) {
			$('tbody').append($(el));
		}) // append the sorted rows to the body
	}

})