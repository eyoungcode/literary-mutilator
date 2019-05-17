//styling for javascript challenge
function textChanger(){
	document.getElementById("one").style.fontFamily = "impact";
	document.getElementById("one").style.color = "green";
}
function textColor(){
	document.getElementById("two").style.color = "red";
	document.getElementById("two").style.backgroundColor = "black";
}

function highlight(text) {
	var inputText = document.getElementById("inputText");
	var innerHTML = inputText.innerHTML;
	var index = innerHTML.indexOf(text);
	if (index >= 0) {
		innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		inputText.innerHTML = innerHTML;
	}
}