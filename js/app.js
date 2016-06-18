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
		$('.ready-container ul').append(html)
		document.getElementById('new-item').reset()
		return false
	})

	//Move items from ready to done list//
	$('#done-move').click(function() {
		var checked = $('#ready-form input:checked')
		
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
		var checked = $('#done-form input:checked')
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

	//Select only checked items//
	
})

	

