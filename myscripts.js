function myFunction() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	document.execCommand("copy");
	alert("Copied the text! " + copyText.value);
}

function alertFunction() {
	alert("Alert!");
}