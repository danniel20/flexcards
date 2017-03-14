$(function(){

	$(".card-option").on("click", function(event){
		var $card = $(this).parent().parent();

		if($(this).hasClass("card-delete")){
			$card.fadeOut(1000, "linear", function(){
				$card.remove();
			});

			return;
		}

		if($(this).hasClass("card-edit")){
			var $content = $card.find(".card-content");
			$content.attr("contenteditable", true);
			$content.focus();
			return;
		}

		var colorValue = this.dataset.color;
		$card.attr("data-color", colorValue);
	});
});