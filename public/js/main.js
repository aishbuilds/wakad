$(document).ready(function(){
	
	hash = {
		"अगर": "if",
		"अन्यथा": "else",
		"छाप": "p",
		"समाप्त": "end"
	}

	$('#submit-btn').click(function(){
		console.log($('#code').val());
		arr = $('#code').val().replace(/\n/g, ' ')
		console.log('------')
		console.log(arr)
		arr = arr.split(' ')
		console.log(arr);
		for(i = 0; i < arr.length; i++){
			if(hash[arr[i]]){
				arr[i] = hash[arr[i]]
			}
		}
		console.log(arr)
		input = arr.join(' ')
		console.log(input)

		$.ajax({
			url: "eval",
			method: "POST",
			data: {code: input}
		}).done(function(data) {
			console.log( "done" );
			console.log(data)
			$("#output").html(data)
		});
	})
})