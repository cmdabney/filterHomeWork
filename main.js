var nbDrop = 858; 

$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);

		button.toggleClass("active");

		$(".character.active").removeClass("active");

		$(".filter.active").each(function(){
			var this_button = $(this);
			var filter = this_button.data("filter");
			$("." + filter).addClass("active");
		});

		// if (filter === "everyone") {
		// 	$(".character").addClass("active");
		// } else {
		// 	$(".character.active").removeClass("active");
		// 	$("." + filter).addClass("active");
		// }

		// Make it rain
		createRain();
	});
});

// function to generate a random number range.
function randRange(minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {
	for( i=1;i<nbDrop;i++) {
		var dropLeft = randRange(0,1600);
		var dropTop = randRange(-1000,1400);

		$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
		$('#drop'+i).css('left',dropLeft);
		$('#drop'+i).css('top',dropTop);
	}
}