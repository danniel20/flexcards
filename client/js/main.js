$(function(){

	var editable = false;

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

			if(editable){
				editable = false;
				$content.attr("contenteditable", false);
				$content.blur();
				$(this).removeClass("isActive");
			}
			else{
				editable = true;
				$content.attr("contenteditable", true);
				$content.focus();
			}

			return;
		}

		var colorValue = this.dataset.color;
		$card.attr("data-color", colorValue);

		$(this).addClass("isActive");
	});

	$(".card").on("blur", function(){
		$(this).find(".card-content").attr("contenteditable", false);
		$(this).find(".isActive").removeClass("isActive");
	});
});