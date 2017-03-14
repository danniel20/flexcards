$(function(){

	$(".card-option").on("click", function(event){
		var $card = $(this).parent().parent();
		$(this).siblings().removeClass("isActive");

		if($(this).hasClass("card-delete")){
			$(this).addClass("isActive");
			$card.fadeOut(1000, "linear", function(){
				$card.remove();
			});

			return;
		}

		if($(this).hasClass("card-edit")){
			$(this).addClass("isActive");
			var $content = $card.find(".card-content");
			$content.attr("contenteditable", true);
			$content.focus();
			return;
		}

		var colorValue = this.dataset.color;
		$card.attr("data-color", colorValue);
		$(this).addClass("isActive");
	});
});