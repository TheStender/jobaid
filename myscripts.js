function copyProvider() {
	var copyText = document.getElementById("providerVerbiage");
	copyText.select();
	document.execCommand("copy");
	alert("Copied the text!");
}

function copyException() {
	var copyText = document.getElementById("exceptionVerbiage");
	copyText.select();
	document.execCommand("copy");
	alert("Copied the text!");
}

function copyClient() {
	var copyText = document.getElementById("networkVerbiage");
	copyText.select();
	document.execCommand("copy");
	alert("Copied the text!");
}

function copyPhone() {
	var copyText = document.getElementById("phoneNumber").select();
	document.execCommand("copy");
	alert("Copied the text!");
}
/*
function copyAddress() {
	var copyName = document.getElementById("nameOfPerson");
	var copyHospAddress = document.getElementById("address");
	var copyFax = document.getElementById("companyFax");
	var copyPhone = document.getElementById("companyPhone");
	var copyContact = document.getElementById("contactName");
	var copyTat = document.getElementById("tatTime");
	var copyInstructions = document.getElementById("specialInstructions");
	var wholeAddress = copyHospAddress + copyFax;
	// document.execCommand("copy");
	document.getElementById("testArea").value = copyName;
	
	
} */

function copyWholeAddress() {
	var copyWholeAddress = document.getElementById("testArea").select();
	document.execCommand("copy");
}

function dueDate() {
	var dayMS = new Date().getTime() + (86400000 * 4);
	var ifSaturday = new Date().getTime() + (86400000 * 3);
	var ifSunday = new Date().getTime() + (86400000 * 2);
	var taskDate = new Date(dayMS);
	
	var dayOfWeek = taskDate.getDay();
	if(dayOfWeek == 0) {
		var taskDate = new Date(ifSunday)
	} else if (dayOfWeek == 6) {
		var taskDate = new Date(ifSaturday)
	} else {
		taskDate = taskDate;
	}

	var month = taskDate.getMonth()+1;
	var day = taskDate.getDate();
	var year = taskDate.getFullYear();
	var newdate = month + "/" + day + "/" + year;
	
	document.getElementById("demo").innerHTML = "The due date is: " + newdate;
	
	
}
