function copyClient() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'CLIENT/NETWORK APPROVAL: \nPlaced letter information on the Client & Network Approval SharePoint';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyPhone() {
    let textarea = document.createElement('textarea');
    textarea.textContent = localStorage.getItem("userPhone");
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copySharepoint() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'Case added to Post Pay Invoice Submissions SharePoint for invoice payment processing';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function getVerbiage() {
    var originalPhone = document.getElementById("originalPhone").value;
    var name = document.getElementById("nameOfPerson").value;
    var address = document.getElementById("address").value;
    var fax = document.getElementById("companyFax").value;
    var phone = document.getElementById("companyPhone").value;
    var contactName = document.getElementById("contactName").value;
    var email = document.getElementById("email").value;
    var tatTime = document.getElementById("tatTime").value;
    var special = document.getElementById("specialInstructions").value;

    if (fax.length == 0) {
        fax = "not accepted";
    } else {
        fax = `accepted. Faxes may be sent to: ${fax}`;
    }


    if (phone.length != 0 && contactName.length != 0) {
        phone = `Direct Line for Medical Records Department is: ${phone}. Ask for ${contactName}\n\n`;
    } else if (phone.length == 0 && contactName.length != 0) {
        contactName = `Contact Name is: ${contactName}\n\n`;
    } else if (phone.length != 0 && contactName.length == 0) {
        phone = `Direct Line for Medical Records Department is: ${phone}.\n\n`;
    } else {
        phone = "";
        contactName = "";
    }


    if (email.length == 0) {
        email = "";
    } else {
        email = `Records can be emailed to: ${email}\n\n`;
    }

    if (tatTime.length == 0) {
        tatTime = "";
    } else {
        tatTime = `TAT stated as ${tatTime}.\n\n`;
    }

    if (special.length == 0) {
        special = "";
    } else {
        special = `Special Instructions are: ${special}\n\n`;
    }

    var allTogether = `PROVIDER VERIFICATION:\nCalled ${originalPhone} and spoke with ${name}. \n\nPer ${name} mailing address is:\n${address}\n\nMedical records requests via fax ARE ${fax}\n\n${phone}${email}${tatTime}${special}Contacts screen updated.`;
    document.getElementById("providerVerbiage").value = allTogether;
    var copyVerbiage = document.getElementById("providerVerbiage").select();
    document.execCommand("copy");
}

function getFollowUp() {
    var phone = document.getElementById("originalPhone").value;
    var contactName = document.getElementById("nameOfPerson").value;
    var notes = document.getElementById("address").value;
    var followUpNote = `Phone call out: Called ${phone} and spoke with ${contactName}. Per ${contactName}, ${notes}.`;

    document.getElementById("providerVerbiage").value = followUpNote;
    var copyFollowUp = document.getElementById("providerVerbiage").select();
    document.execCommand("copy");
}

function dueDate() {
    var dayMS = new Date().getTime() + (86400000 * 4);
    var ifSaturday = new Date().getTime() + (86400000 * 3);
    var ifSunday = new Date().getTime() + (86400000 * 2);
    var taskDate = new Date(dayMS);

    var dayOfWeek = taskDate.getDay();
    if (dayOfWeek == 0) {
        var taskDate = new Date(ifSunday)
    } else if (dayOfWeek == 6) {
        var taskDate = new Date(ifSaturday)
    } else {
        taskDate = taskDate;
    }

    var month = taskDate.getMonth() + 1;
    var day = taskDate.getDate();
    var year = taskDate.getFullYear();
    var newdate = month + "/" + day + "/" + year;

    document.getElementById("demo").innerHTML = "The due date is: " + newdate;

    var dayHold = new Date().getTime() + (86400000 * 29);
    var holdDate = new Date(dayHold);
    var holdMonth = holdDate.getMonth() + 1;
    var holdDay = holdDate.getDate();
    var holdYear = holdDate.getFullYear();
    var newHoldDate = holdMonth + "/" + holdDay + "/" + holdYear;
    document.getElementById("holdDate").innerHTML = "The hold date is: " + newHoldDate;
}

function clinicalDate() {
    var clinicalDue = new Date().getTime() + (86400000 * 14);
    var clinicalDate = new Date(clinicalDue);
    var clinicalMonth = clinicalDate.getMonth() + 1;
    var clinicalDay = clinicalDate.getDate();
    var clinicalYear = clinicalDate.getFullYear();
    var newClinicalDate = clinicalMonth + "/" + clinicalDay + "/" + clinicalYear 
    document.getElementById("clinicalDate").innerHTML = "14 Day Due date is: " + newClinicalDate;
}

function formatPhone(obj) {
    var numbers = obj.value.replace(/\D/g, ''),
        char = { 0: '', 3: '-', 6: '-' };
    obj.value = '';
    for (var i = 0; i < numbers.length; i++) {
        obj.value += (char[i] || '') + numbers[i];
    }
}

function getTaskNote() {
	var userName = localStorage.getItem("userName");
    let textarea = document.createElement('textarea');
    textarea.textContent = `Case Assigned to ${userName}`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyClaimLines() {
	var patNum = document.getElementById('patientNumber');
	var recNum = document.getElementById('recordsReceived');
	var selType = document.getElementById('lineOfBusiness');
	var busType = selType.options[selType.selectedIndex].text;
	var recNumInt = recNum.options[recNum.selectedIndex].text;
	var patNumInt = patNum.options[patNum.selectedIndex].text;

	var patNum2 = document.getElementById('patientNumber2');
	var recNum2 = document.getElementById('recordsReceived2');
	var selType2 = document.getElementById('lineOfBusiness2');
	var busType2 = selType2.options[selType2.selectedIndex].text;
	var recNumInt2 = recNum2.options[recNum2.selectedIndex].text;
	var patNumInt2 = patNum2.options[patNum2.selectedIndex].text;
	
    let textarea = document.createElement('textarea');
	
	if(document.getElementById('multipleLines').checked) {
		var totalPatients = Number(patNumInt) + Number(patNumInt2);
		textarea.textContent = `Claim_lines:${totalPatients}, C&S:0, E&I:${patNum.value}, M&R:${patNum2.value}`;
	}
	else {
		if(busType == "E&I") {
			textarea.textContent = `Claim_lines:${patNum.value}, C&S:0, E&I:${patNum.value}, M&R:0`;
		} else if (busType == "M&R") {
			textarea.textContent = `Claim_lines:${patNum.value}, C&S:0, E&I:0, M&R:${patNum.value}`;
		} else {
			textarea.textContent = `Claim_lines:${patNum.value}, C&S:${patNum.value}, E&I:0, M&R:0`;
		}
	}

    
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyConfirmation(message) {
    var message = message;
    let textarea = document.createElement('textarea');
    textarea.textContent = message;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}


function copyNoInvoice() {
	var patNum = document.getElementById('patientNumber');
	var recNum = document.getElementById('recordsReceived');
	var selType = document.getElementById('lineOfBusiness');
	var busType = selType.options[selType.selectedIndex].text;
	var recNumInt = recNum.options[recNum.selectedIndex].text;
	var patNumInt = patNum.options[patNum.selectedIndex].text;

	var patNum2 = document.getElementById('patientNumber2');
	var recNum2 = document.getElementById('recordsReceived2');
	var selType2 = document.getElementById('lineOfBusiness2');
	var busType2 = selType2.options[selType2.selectedIndex].text;
	var recNumInt2 = recNum2.options[recNum2.selectedIndex].text;
	var patNumInt2 = patNum2.options[patNum2.selectedIndex].text;

	let textarea = document.createElement('textarea');

	if(document.getElementById('multipleLines').checked) {
	    var totalRecords = Number(recNumInt) + Number(recNumInt2);
		var totalPatients = Number(patNumInt) + Number(patNumInt2);
	    textarea.textContent = `RECORDS RECEIVED:\nReceived ${totalRecords} of ${totalPatients} Medical Records. NO Invoice(s).\n\n${busType} = ${recNum.value} of ${patNum.value}\n${busType2} = ${recNum2.value} of ${patNum2.value}`;
	}
	else {
	    textarea.textContent = `RECORDS RECEIVED:\nReceived ${recNum.value} of ${patNum.value} Medical Records. NO Invoice(s).\n\n${busType} = ${recNum.value} of ${patNum.value}`;
	}

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyWithInvoice() {
	var patNum = document.getElementById('patientNumber');
	var recNum = document.getElementById('recordsReceived');
	var selType = document.getElementById('lineOfBusiness');
	var busType = selType.options[selType.selectedIndex].text;
	var recNumInt = recNum.options[recNum.selectedIndex].text;
	var patNumInt = patNum.options[patNum.selectedIndex].text;

	var patNum2 = document.getElementById('patientNumber2');
	var recNum2 = document.getElementById('recordsReceived2');
	var selType2 = document.getElementById('lineOfBusiness2');
	var busType2 = selType2.options[selType2.selectedIndex].text;
	var recNumInt2 = recNum2.options[recNum2.selectedIndex].text;
	var patNumInt2 = patNum2.options[patNum2.selectedIndex].text;

	let textarea = document.createElement('textarea');

	if(document.getElementById('multipleLines').checked) {
	    var totalRecords = Number(recNumInt) + Number(recNumInt2);
		var totalPatients = Number(patNumInt) + Number(patNumInt2);
	    textarea.textContent = `RECORDS RECEIVED:\nReceived ${totalRecords} of ${totalPatients} Medical Records. YES, Invoice attached to case.\n\n${busType} = ${recNum.value} of ${patNum.value}\n${busType2} = ${recNum2.value} of ${patNum2.value}`;
	}
	else {
	    textarea.textContent = `RECORDS RECEIVED:\nReceived ${recNum.value} of ${patNum.value} Medical Records. YES, Invoice attached to case.\n\n${busType} = ${recNum.value} of ${patNum.value}`;
	}

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyClinical() {
	var originalPath = document.getElementById("filePath").value;
	var clinicalPath = "\\02 Initial Clinical";
    let textarea = document.createElement('textarea');
    textarea.textContent = `Refer to Clinical for review. Path: ${originalPath}${clinicalPath} `;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function getInvoicePath() {
	var originalPath = document.getElementById("filePath").value;
	var invoicePath = "\\01 Intake\\Invoices";
	let textarea = document.createElement('textarea');
    textarea.textContent = `${originalPath}${invoicePath}`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function updateUserInfo() {
	var name = document.getElementById("getUserName").value;
	var phone = document.getElementById("getUserPhone").value;
	localStorage.setItem("userName", name);
	localStorage.setItem("userPhone", phone);
	document.getElementById("userName").innerHTML = localStorage.getItem("userName");
	document.getElementById("userPhone").innerHTML = localStorage.getItem("userPhone");
}

function getUserInfo() {
	var userName = localStorage.getItem("userName");
	var userPhone = localStorage.getItem("userPhone");
	document.getElementById("userName").innerHTML = userName;
	document.getElementById("userPhone").innerHTML = userPhone;
}

$(document).ready(function () {

    $("#step1Button").click(function () {
        $(this).toggleClass("btn-danger btn-success ");
    });

    $("#step8Button").click(function () {
        $(this).toggleClass("btn-danger btn-success ");
    });

    $("#step13Button").click(function () {
        $(this).toggleClass("btn-danger btn-success ");
    });

    $("#noInvoice").click(function () {
        $(this).toggleClass("btn-info btn-success ");
    });

    $("#yesInvoice").click(function () {
        $(this).toggleClass("btn-info btn-success ");
    });

    $("#clinicalNote").click(function () {
        $(this).toggleClass("btn-info btn-success ");
    });

    $("#recordsStep15Button").click(function () {
        $(this).toggleClass("btn-info btn-success ");
    });
	
	$("#verbiageButton").click(function () {
        $(this).toggleClass("btn-primary btn-success ");
    });
	
	$("#phoneButton").click(function () {
        $(this).toggleClass("btn-info btn-success ");
    });
	
	$("#mrrButton").click(function () {
        $(this).toggleClass("btn-danger btn-success ");
    });

	$("#verbiageButton1").click(function () {
        $(this).toggleClass("btn-primary btn-success ");
    });
	
	$("#verbiageButton2").click(function () {
        $(this).toggleClass("btn-primary btn-success ");
    });
	
	$("#verbiageButton3").click(function () {
        $(this).toggleClass("btn-primary btn-success ");
    });
	
	$("#verbiageButton4").click(function () {
        $(this).toggleClass("btn-primary btn-success ");
    });
	
	$("#verbiageButton5").click(function () {
        $(this).toggleClass("btn-primary btn-success ");
    });
	
	$("#verbiageButton6").click(function () {
        $(this).toggleClass("btn-primary btn-success ");
    });
	
	$("#sharepointInvoice").click(function () {
        $(this).toggleClass("btn-info btn-success ");
    });
	
	$("#invoicePath").click(function () {
        $(this).toggleClass("btn-info btn-success ");
    });

	$("#upsButton").click(function () {
        $(this).toggleClass("btn-danger btn-success ");
    });

	$("#followUpButton").click(function () {
        $(this).toggleClass("btn-primary btn-success ");
    });
	
});