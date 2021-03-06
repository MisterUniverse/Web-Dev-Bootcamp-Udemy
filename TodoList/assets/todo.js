$(document).ready(function() {
	$("ul").on("click", "li", function() {
		$(this).toggleClass('completed');
	});

	$("span").click(function(e) {
		$(this).parent().fadeOut(500,function(event) {
			$(this).remove();
		});
		event.stopPropagation();
	});

	$("input[type='text']").keypress(function(event) {
		if(event.which === 13) {
			let todoText = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
		}
	});

	$(".fa fa-plus").click(function() {
		$("input[type='text']").fadeToggle();
	});
});
