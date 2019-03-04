function copyException() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'Checked Exception Facilities Spreadsheet. TIN XXX is an exception facility. \nMailing address is:\nXXX.\n\nFaxes may be sent to: (XXX)XXX-XXXX.\n\nMRR/Patient List Instructions are: [insert MRR/Patient List Instructions]. \n\nFirst name/last name, (XXX)XXX-XXXX, XXX@XXX.com is primary contact for facility. \n\nSpecial Instructions for Case: [insert information from Special Instructions tab]';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyProvider() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'PROVIDER VERIFICATION:\nCalled (XXX)XXX-XXXX and spoke with XXX. Per XXX mailing address is:\nXXX.\n\nMedical records requests via fax ARE (are NOT) accepted. Faxes may be sent to: (XXX)XXX-XXXX.\n\nDirect Line for Medical Records Department is: (XXX)XXX-XXXX.\n\nTAT stated as XXXXXX. \n\nContacts screen updated.';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

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
    textarea.textContent = '763-361-6898';
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

function formatPhone(obj) {
    var numbers = obj.value.replace(/\D/g, ''),
        char = { 0: '', 3: '-', 6: '-' };
    obj.value = '';
    for (var i = 0; i < numbers.length; i++) {
        obj.value += (char[i] || '') + numbers[i];
    }
}

function getTaskNote() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'Case Assigned to Anthony Stender';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyClaimLines() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'Claim_lines:XX, C&S:0, E&I:0, M&R:0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyConfirmation() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'Fax Confirmation Attached';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyNoInvoice() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'RECORDS RECEIVED:\nReceived (XX) of (XX) Medical Records. NO Invoice(s).\n\nE&I = X of X\nM&R = X of X\nC&S = X of X';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyWithInvoice() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'RECORDS RECEIVED: \nReceived (XX) of (XX) Medical Records. YES, Invoice attached to case.\n\nE&I = X of X\nM&R = X of X\nC&S = X of X';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

function copyClinical() {
    let textarea = document.createElement('textarea');
    textarea.textContent = 'Refer to Clinical for review. Path: ';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

document.getElementById('step1').onchange = function(){
  var cart = document.getElementsByClassName('hideUnless')[0];
  if (this.checked) cart.classList.remove('hide');
  else cart.classList.add('hide');
}


function WriteToFile() {
	var text_to_save = document.getElementById("firstName").value;
	localStorage.setItem("text", text_to_save);
    
 }

function retrieve() {
	var text = localStorage.getItem("text");
	document.getElementById("writeHere").innerHTML = text;
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
	
	
});