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
	var txt = document.getElementById("three").innerHTML
}

var oldWord = document.getElementById("three").value;
var newWord = document.getElementById("three").value;

var re = new RegExp(oldWord);

var newText = txt.new(newWord);

document.getElementById("three").innerHTML = newText;