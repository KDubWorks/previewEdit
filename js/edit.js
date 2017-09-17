var win = $(window).width();
//edit title array
var editT = $(".editTitle");
var editTA = new Array();
var editTilSec = $(".editorSection");

//edit sections
var editSec = $(".editSec");
var editSA = new Array();

for(var i = 0; i < editT.length; i++) {
	editTA[i] = editT[i];
	editSA[i] = editSec[i];
}

if(win >= 769 && win <= 1440) {

	$(".editTitle").click(function() {

		var n = editTA.indexOf(this);

		if(n == 0) {
			$(editTilSec[n]).css("height", "auto");
			$("#editTools").css("left", "0px");
			$(editSec[n]).css("display", "block");
		} else if(n == 1) {
			$(editTilSec[n]).css("height", "auto");
			$("#editTools").css("left", "0px");
			$(editSec[n]).css("display", "block");
		} else if(n == 2) {
			$(editTilSec[n]).css("height", "auto");
			$("#editTools").css("left", "0px");
			$(editSec[n]).css("display", "block");
		} else if(n == 3) {
			$(editTilSec[n]).css("height", "auto");
			$("#editTools").css("left", "0px");
			$(editSec[n]).css("display", "block");
		} else if(n == 4) {
			$(editTilSec[n]).css("height", "auto");
			$("#editTools").css("left", "0px");
			$(editSec[n]).css("display", "block");
		} else if(n == 5) {
			$(editTilSec[n]).css("height", "auto");
			$("#editTools").css("left", "0px");
			$(editSec[n]).css("display", "block");
		}

	});

}


