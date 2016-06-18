$(document).ready(function() {
	$('#new-item').submit(function() {
		var value = $('#new-input').val();	
		  var html = 
		  '<li>' + 
		  	'<div class='checkbox'>' +
				'<input type='checkbox' name='items'>'+ value +
              	'<br>' +
            '</div>' +
          '</li>'
		$('.ready-container ul').append(html)
		document.getElementById("new-item").reset()
		return false
	})

	$('#done-move').click(function() {
		var checked = $('input:checked')
		for (var i = 0; i < checked.length; i++) {
			var item = checked[i]
			var li = $(item).parent().parent()
			$('.done-container ul').append(li)
		}
		document.getElementById('done-form').reset()
	})

	$('ready-move').click(function() {
		var checked = $('input:checked')
		for (var i = 0; i < checked.length; i++) {
			var item = checked[i]
			var li = $(item).parent().parent()
			$('.ready-container ul').append(li)
		}
		document.getElementById('ready-form').reset()
	})


});


