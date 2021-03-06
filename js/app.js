if (!localStorage.listObject) {
	localStorage.listObject = '{}' //object = key/value array//
}

$(document).ready(function() {
	//Enter new item to ready list//
	$('#new-item').submit(function() {	
		var value = $('#new-input').val();	
		var html = 
		  '<li>' + 
		  	'<div class="checkbox">' +
				'<input type="checkbox" name="items">'+ value +
              	'<br>' +
            '</div>' +
          '</li>'
        var listObject = JSON.parse(localStorage.listObject)
		var num = listObject[value]
		if (isNaN(num) == true)
			num = 0 
		listObject[value] = num + 1
		if (listObject[value] == 3) {
			$('.fave-container ul').append(html)
		}		
		localStorage.listObject = JSON.stringify(listObject)  
		$('.ready-container ul').append(html)
		document.getElementById('new-item').reset()
		return false
	})

	//Move items from ready to done list//
	$('#done-move').click(function() {
		var checked = $('input:checked')
		
		for (var i = 0; i < checked.length; i++) {
			var item = checked[i]
			var li = $(item).parent().parent()
			$('.done-container ul').append(li)
		}
		document.getElementById('done-form').reset()
		if (checked.length == 0) {
			alert('Please select at least one item to move.')
			return false
		}	
	})

	//Move items from done to ready list//
	$('#ready-move').click(function() {
		var checked = $('input:checked')
		for (var i = 0; i < checked.length; i++) {
			var item = checked[i]
			var li = $(item).parent().parent()
			$('.ready-container ul').append(li)
		}
		document.getElementById('ready-form').reset()
		if (checked.length == 0) {
			alert('Please select at least one item to move.')
			return false
		}
	})

	//Add items to favorite list//
	$('#fave-move').click(function() {
		var checked = $('input:checked')
		for (var i = 0; i < checked.length; i++) {
			var item = checked[i]
			var li = $(item).parent().parent()
			$(li).clone().appendTo('.fave-container ul')
			
		}
		document.getElementById('ready-form').reset()
		document.getElementById('done-form').reset()
		document.getElementById('fave-form').reset()
		if (checked.length == 0) {
			alert('Please select at least one item to move.')
			return false
		}
	})

	//Delete checked items//
	$('#trash-move').click(function() {
		var checked = $('input:checked')
		for (var i = 0; i < checked.length; i++) {
			var item = checked[i]
			var li = $(item).parent().parent()
			$(li).remove()
		}
		if (checked.length == 0) {
			alert('Please select at least one item to move.')
			return false
		}
	})

	//Search items on lists//
	$('#search-form').submit(function() {
		$('li').each(function() {
			var liText = $(this).text().toLowerCase()
			var searchTerm = $('#search-input').val().toLowerCase()
			if (liText.indexOf(searchTerm) == -1) {
				$(this).hide()
			}
			else {
				$(this).show()
			}
		})
		return false
	})

})