/* ORIGINAL FUNCTION

function getVerbiage() {
	var originalPhone = document.getElementById("originalPhone").value;
	var name = document.getElementById("nameOfPerson").value;
	var address = document.getElementById("address").value;
	var fax = document.getElementById("companyFax").value;
	var phone = document.getElementById("companyPhone").value;
	var contactName = document.getElementById("contactName").value;
	var tatTime= document.getElementById("tatTime").value;
	var special = document.getElementById("specialInstructions").value;
	var allTogether = `PROVIDER VERIFICATION:\nCalled ${originalPhone} and spoke with ${name}. \n\nPer ${name} mailing address is:\n${address}\n\nMedical records requests via fax ARE (are NOT) accepted. Faxes may be sent to:${fax}\n\nDirect Line for Medical Records Department is: ${phone}. Ask for ${contactName}\n\nTAT stated as ${tatTime}.\n\nSpecial Instructions are: ${special} \n\nContacts screen updated.`;
	document.getElementById("providerVerbiage").value = allTogether;
	var copyVerbiage = document.getElementById("providerVerbiage").select();
	document.execCommand("copy");	
}

*/

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

	var allTogether = `PROVIDER VERIFICATION:\nCalled ${originalPhone} and spoke with ${name}. \n\nPer ${name} mailing address is:\n${address}\n\nMedical records requests via fax ARE ${fax}\n\nDirect Line for Medical Records Department is: ${phone}\n\n${contactName}${email}${tatTime}${special}Contacts screen updated.`;
	document.getElementById("providerVerbiage").value = allTogether;
	var copyVerbiage = document.getElementById("providerVerbiage").select();
	document.execCommand("copy");	
}

function formatPhone(obj) {
	var numbers = obj.value.replace(/\D/g, ''),
        char = { 0: '', 3: '-', 6: '-' };
            obj.value = '';
            for (var i = 0; i < numbers.length; i++) {
                obj.value += (char[i] || '') + numbers[i];
            }
}

