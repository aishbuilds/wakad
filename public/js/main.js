$(document).ready(function(){
	var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            lineNumbers: true,
            mode:  "ruby"
        });

	hash = {
		"यदि": "if",
		"अथवा": "else",
		"छाप": "p",
		"समाप्त": "end",
		"जब": "while",
		"कर": "do"
	}

	$('#submit-btn').click(function(){
		editor.save()
		$("#output").html("")
		console.log($('#code').val());
		arr = $('#code').val().replace(/\n/g, ' ; ')
		console.log('------')
		console.log(arr)
		arr = arr.split(' ')
		console.log(arr);
		for(i = 0; i < arr.length; i++){

			if(hash[arr[i].replace(/ /g, '')]){
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

	$(".keywords").click(function(){
		editor.replaceRange($(this).attr('keyword') + " ", CodeMirror.Pos(editor.lastLine()))
		editor.focus()
	})
})