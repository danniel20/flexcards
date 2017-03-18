$(function(){

	var editable = false;

	$(".form-card-button").on("click", function(event){
		event.preventDefault();

		var content = $(".form-card-content").val();
		
		var novoCard = criaCard("Cartão XXX");

		$(".cards-container").prepend(novoCard);
	});


	function criaCard(texto){

		var $card = $("<div>");
		$card.addClass("card");
		$card.attr("data-color", "blue");
		$card.attr("id", "card-x");

		var $opcoesDoCard = criaOpcoesDoCard();
		$card.append($opcoesDoCard);

		var $conteudo = criaConteudo(texto);
		$card.append($conteudo);

		return $card;
	}

	function criaOpcoesDoCard(){

		var $optionsContainer = $("<div>");
		$optionsContainer.addClass("card-colors-options");

		var $buttonDelete = $("<button>");
		$buttonDelete.addClass("card-option card-delete");
		$buttonDelete.click(removeCard);

		var $buttonEdit = $("<button>");
		$buttonEdit.addClass("card-option card-edit");
		$buttonEdit.click(editCard);

		var $buttonBlue = $("<button>");
		$buttonBlue.addClass("card-option");
		$buttonBlue.attr("data-color", "blue");
		$buttonBlue.click(selectColor);

		var $buttonRed = $("<button>");
		$buttonRed.addClass("card-option");
		$buttonRed.attr("data-color", "red");
		$buttonRed.click(selectColor);

		var $buttonGreen = $("<button>");
		$buttonGreen.addClass("card-option");
		$buttonGreen.attr("data-color", "green");
		$buttonGreen.click(selectColor);

		var $buttonYellow = $("<button>");
		$buttonYellow.addClass("card-option");
		$buttonYellow.attr("data-color", "yellow");
		$buttonYellow.click(selectColor);

		$optionsContainer.append($buttonDelete);
		$optionsContainer.append($buttonEdit);
		$optionsContainer.append($buttonBlue);
		$optionsContainer.append($buttonRed);
		$optionsContainer.append($buttonGreen);
		$optionsContainer.append($buttonYellow);

		return $optionsContainer;
	}

	function criaConteudo(texto){

		var $conteudo = $("<p>");
		$conteudo.addClass("card-content");
		$conteudo.text(texto);
		$conteudo.blur(removeFocus);

		return $conteudo;
	}

	function removeCard(){
		$(this).siblings().removeClass("isActive");

		var $card = $(this).parent().parent();
		
		$card.fadeOut(1000, "linear", function(){
			$card.remove();
		});
	}

	function editCard(){
		$(this).siblings().removeClass("isActive");
		$(this).addClass("isActive");

		var $card = $(this).parent().parent();
		var $content = $card.find(".card-content");

		if(editable){
			removeFocus();
		}
		else{
			editable = true;
			$content.attr("contenteditable", true);
			$content.focus();
		}
	}

	function removeFocus(){

		var $card = $(this).parent();
		$cardEdit = $card.find(".card-edit");
		$cardEdit.removeClass("isActive");

		editable = false;
		$(".card-content").attr("contenteditable", false);
	}

	function selectColor(){
		var $card = $(this).parent().parent();
		$(this).siblings().removeClass("isActive");

		var colorValue = this.dataset.color;
		$card.attr("data-color", colorValue);

		$(this).addClass("isActive");
	}
});