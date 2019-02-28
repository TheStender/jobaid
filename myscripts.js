function copyProvider() {
	var copyText = document.getElementById("providerVerbiage");
	copyText.select();
	document.execCommand("copy");
}

function copyException() {
	var copyText = document.getElementById("exceptionVerbiage");
	copyText.select();
	document.execCommand("copy");
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
	var tatTime= document.getElementById("tatTime").value;
	var special = document.getElementById("specialInstructions").value;

	if (fax.length == 0) {
		fax = "not accepted";
	} else {
		fax = `accepted. Faxes may be sent to: ${fax}`;
	}

	if (contactName.length == 0) {
		contactName = "";
	} else {
		contactName = `. Ask for ${contactName}\n\n`
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

	var allTogether = `PROVIDER VERIFICATION:\nCalled ${originalPhone} and spoke with ${name}. \n\nPer ${name} mailing address is:\n${address}\n\nMedical records requests via fax ARE ${fax}\n\nDirect Line for Medical Records Department is: ${phone}${contactName}${email}${tatTime}${special}Contacts screen updated.`;
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
	
	var dayHold = new Date().getTime() + (86400000 * 29);
	var holdDate = new Date(dayHold);
	var holdMonth = holdDate.getMonth()+1;
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