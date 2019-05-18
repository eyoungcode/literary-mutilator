//styling for javascript challenge
function textChanger(){
	document.getElementById("one").style.fontFamily = "impact";
	document.getElementById("one").style.color = "green";
}
function textColor(){
	document.getElementById("two").style.color = "red";
	document.getElementById("two").style.backgroundColor = "black";
}

function changeWord() {
	var txt = document.getElementById("old-new").innerHTML
}

var oldWord = document.getElementById("txt-old-word").value;
var newWord = document.getElementById("txt-new-word").value;

var re = new RegExp(oldWord, "gi");
var newText = txt.new(re, newWord);
document.getElementById("old-new").innerHTML = newText;