//styling for javascript challenge
function textChanger(){
	document.getElementById("one").style.fontFamily = "impact";
	document.getElementById("one").style.color = "green";
}
function textColor(){
	document.getElementById("two").style.color = "red";
	document.getElementById("two").style.backgroundColor = "black";
}

function colorWord() {
	var txt = document.getElementById("colorWord").innerHTML
}

var findWord = document.getElementById("txt-find").value;
var replaceWord = document.getElementById("txt-replace").value;
document.getElementById("colorWord").innerHTML = newText;