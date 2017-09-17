var learnMore = document.querySelectorAll(".learn-more");
var lMa = new Array();
var editBlock = document.querySelectorAll(".editor-blocks");

for(var i = 0; i < learnMore.length; i++) {
	lMa[i] = learnMore[i];
}

for(var i = 0; i < learnMore.length; i++) {

	learnMore[i].addEventListener("click", function() {

		var n = lMa.indexOf(this);

		if(n == 0) {
			editBlock[n].style.height = "auto";
			editBlock[1].style.height = "10vh";
			editBlock[2].style.height = "10vh";
			editBlock[3].style.height = "10vh";
			editBlock[4].style.height = "10vh";
			editBlock[5].style.height = "10vh";
		} else if(n == 1) {
			editBlock[n].style.height = "auto";
			editBlock[0].style.height = "10vh";
			editBlock[2].style.height = "10vh";
			editBlock[3].style.height = "10vh";
			editBlock[4].style.height = "10vh";
			editBlock[5].style.height = "10vh";
		} else if(n == 2) {
			editBlock[n].style.height = "auto";
			editBlock[0].style.height = "10vh";
			editBlock[1].style.height = "10vh";
			editBlock[3].style.height = "10vh";
			editBlock[4].style.height = "10vh";
			editBlock[5].style.height = "10vh";
		} else if(n == 3) {
			editBlock[n].style.height = "auto";
			editBlock[0].style.height = "10vh";
			editBlock[1].style.height = "10vh";
			editBlock[2].style.height = "10vh";
			editBlock[4].style.height = "10vh";
			editBlock[5].style.height = "10vh";
		} else if(n == 4) {
			editBlock[n].style.height = "auto";
			editBlock[0].style.height = "10vh";
			editBlock[1].style.height = "10vh";
			editBlock[2].style.height = "10vh";
			editBlock[3].style.height = "10vh";
			editBlock[5].style.height = "10vh";
		} else if(n == 5) {
			editBlock[n].style.height = "auto";
			editBlock[0].style.height = "10vh";
			editBlock[1].style.height = "10vh";
			editBlock[2].style.height = "10vh";
			editBlock[3].style.height = "10vh";
			editBlock[4].style.height = "10vh";
		}

	});

}

var editTitle = document.querySelectorAll(".edit-title");
var eTa = new Array();

for(var i = 0; i < editTitle.length; i++) {
	eTa[i] = editTitle[i];
}

for(var i = 0; i < editTitle.length; i++) {

	editTitle[i].addEventListener("click", function() {

		var n = eTa.indexOf(this);

		if(n == 0) {
			document.getElementById("background-image-edit").style.left = "0vw";
		}

	});

}
