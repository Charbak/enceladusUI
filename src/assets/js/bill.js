function Expand(node) {
	// Change the image (if there is an image)
	if (node.children.length > 0) {
		if (node.children.item(0).tagName == "IMG") {
			node.children.item(0).src = "minus.gif";
		}
	}

	node.nextSibling.style.display = '';
}

function Collapse(node) {
	// Change the image (if there is an image)
	if (node.children.length > 0) {
		if (node.children.item(0).tagName == "IMG") {
			node.children.item(0).src = "plus.gif";
		}
	}

	node.nextSibling.style.display = 'none';
}

function Toggle(node) {
	// Unfold the branch if it isn't visible
	if (node.nextSibling.style.display == 'none') {
		Expand(node);
	}
	// Collapse the branch if it IS visible
	else {
		Collapse(node);
	}

}

//Warning message when check for all container on booking is clicked.
function allOnBill() {
	bookingNumber = document.getElementById('bookingNumber').value;
	if (document.getElementById('saveBill').checked == true) {
		alert('WARNING: Using this function for multiple containers will OVERWRITE all status and notes that might exist already for the other containers on booking ' + bookingNumber + ' !');
	}
}

//Function to check on load conditions for Billing Details JSP
function checkOnLoad(status) {

	var billingTypeDmr = document
	.getElementById('selectedDemurrageBillingStatus').value;

	// Checking billing Type.

	if (billingTypeDmr == '0-No Billing') {

		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
	} else if (billingTypeDmr == '1-Partly Billing') {
		document.getElementById('demurrageBillingAmount').disabled = false;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
		if(document.getElementById('saveBill')!= null){
			document.getElementById('saveBill').checked=false;
			document.getElementById('saveBill').disabled=true;
		}
	} else if (billingTypeDmr == '2-Full Billing') {
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = true;
	}

	var billingTypeDts = document
	.getElementById('selectedDetentionBillingStatus').value;

	if (billingTypeDts == '0-No Billing') {
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
	} else if (billingTypeDts == '1-Partly Billing') {
		document.getElementById('detentionBillingAmount').disabled = false;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
		if(document.getElementById('saveBill')!= null){
				document.getElementById('saveBill').checked=false;
				document.getElementById('saveBill').disabled=true;
			}
			} else if (billingTypeDts == '2-Full Billing') {
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = true;
	}

	// Checking if calculated amount is zero.
	//changed on 07-Dec-2012 (to resolve bug(disabled billing status) when dtsTotalAmount lies between 0 and 1)
	if (Number(document.getElementById('dtsTotalAmount').value) <= 0) {
		document.getElementById('selectedDetentionBillingStatus').disabled = true;
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = true;
	}
	//changed on 07-Dec-2012 (to resolve bug(disabled billing status) when dmrTotalAmount lies between 0 and 1)
	if (Number(document.getElementById('DmrTotalAmount').value) <= 0) {
		document.getElementById('selectedDemurrageBillingStatus').disabled = true;
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = true;
	}

	// checking Action Status.
	if (status == '0') {
		document.getElementById('finalizeBill').disabled = true;
	} else if (status == '2') {
		document.getElementById('saveBl').disabled = true;
		document.getElementById('selectedDemurrageBillingStatus').disabled = true;
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = true;
		document.getElementById('selectedDetentionBillingStatus').disabled = true;
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = true;
		document.getElementById('remarks').disabled = true;
	} 
	//changes by jyotsana/nitu
	else if (status == '3')
	{
		document.getElementById('saveBl').disabled = false;
		document.getElementById('selectedDemurrageBillingStatus').disabled = false;
		document.getElementById('demurrageBillingAmount').disabled = false;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
		document.getElementById('selectedDetentionBillingStatus').disabled = false;
		document.getElementById('detentionBillingAmount').disabled = false;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
		document.getElementById('remarks').disabled = false;
	}
	//
	document.getElementById('canFinalize').value = 'YES';
}

//function to call on change of dmr billing amount.
function onChangeDmrBilling() {
	document.getElementById('canFinalize').value = 'NO';
	var totalAmount = document.getElementById('DmrTotalAmount').value;
	var billingType = document.getElementById('selectedDemurrageBillingStatus').value;
	var billingTypeOther = document.getElementById('selectedDetentionBillingStatus').value;
	if (billingType == '0-No Billing') {

		document.getElementById('demurrageBillingAmount').value = '0.00';
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
		
		if(billingTypeOther != '1-Partly Billing' ){
			document.getElementById('saveBill').disabled=false;
		}
		
	} else if (billingType == '1-Partly Billing') {
		document.getElementById('demurrageBillingAmount').value = totalAmount;
		document.getElementById('demurrageBillingAmount').disabled = false;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
		  if(document.getElementById('saveBill')!= null){
				document.getElementById('saveBill').checked=false;
				document.getElementById('saveBill').disabled=true;
			}
			} else if (billingType == '2-Full Billing') {
				var blankString="      ";
		makeTooltipdmr(blankString);
		document.getElementById('demurrageBillingAmount').value = totalAmount;
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').value='      ';
		document.getElementById('selectedDemerageDisputeReason').disabled = true;
		
		if(billingTypeOther != '1-Partly Billing' ){
			document.getElementById('saveBill').disabled=false;
		}
	}

}

//function to call on change of dts billing amount.
function onChangeDtsBilling() {
	document.getElementById('canFinalize').value = 'NO';
	var totalAmount1 = document.getElementById('dtsTotalAmount').value;
	var billingType = document.getElementById('selectedDetentionBillingStatus').value;
	var billingTypeOther = document.getElementById('selectedDemurrageBillingStatus').value;
	
	if (billingType == '0-No Billing') {
		document.getElementById('detentionBillingAmount').value = '0.00';
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
		
		if(billingTypeOther != '1-Partly Billing' ){
			document.getElementById('saveBill').disabled=false;
		}
	} else if (billingType == '1-Partly Billing') {
		document.getElementById('detentionBillingAmount').value = totalAmount1;
		document.getElementById('detentionBillingAmount').disabled = false;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
		 if(document.getElementById('saveBill')!= null){
				document.getElementById('saveBill').checked=false;
				document.getElementById('saveBill').disabled=true;
			}
	} else if (billingType == '2-Full Billing') {
		var blankString="      ";
		makeTooltipdts(blankString);
		document.getElementById('detentionBillingAmount').value = totalAmount1;
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').value='      ';
		document.getElementById('selectedDetentionDisputeReason').disabled = true;
		
		if(billingTypeOther != '1-Partly Billing' ){
			document.getElementById('saveBill').disabled=false;
		}
		
	}
}

//function to call on clicking save button.
function onSave(click) {
	var dtsBillingType = document
	.getElementById('selectedDetentionBillingStatus').value;
	var dmrBillingType = document
	.getElementById('selectedDemurrageBillingStatus').value;
	document.getElementById('click').value = click;
	//changed on 07-Dec-2012 (to resolve bug(disabled billing status) when dtsTotalAmount lies between 0 and 1)
	if (Number(document.getElementById('dtsTotalAmount').value) > 0) {
		if (dtsBillingType == '0-No Billing'
			|| dtsBillingType == '1-Partly Billing') {
			if (document.getElementById('selectedDetentionDisputeReason').value == '      ') {
				alert('Please select some dispute reason');
				return false;
			} else if (document
					.getElementById('selectedDetentionDisputeReason').value.toUpperCase() == 'OTHER REASON(SEE REMARKS)') {
				if (document.getElementById('remarks').value == '') {
					alert('Please add remarks');
					return false;
				}
			}

		}
	}
	//changed on 07-Dec-2012 (to resolve bug(disabled billing status) when dmrTotalAmount lies between 0 and 1)
	if (Number(document.getElementById('DmrTotalAmount').value) > 0) {
		if (dmrBillingType == '0-No Billing'
			|| dmrBillingType == '1-Partly Billing') {
			if (document.getElementById('selectedDemerageDisputeReason').value == '      ') {
				alert('Please select some dispute reason');
				return false;
			} else if (document.getElementById('selectedDemerageDisputeReason').value.toUpperCase() == 'OTHER REASON(SEE REMARKS)') {
				if (document.getElementById('remarks').value == '') {
					alert('Please add remarks');
					return false;
				}
			}

		}
}
	document.getElementById('selectedDemurrageBillingStatus').disabled = false;
	document.getElementById('demurrageBillingAmount').disabled = false;
	document.getElementById('selectedDemerageDisputeReason').disabled = false;
	document.getElementById('selectedDetentionBillingStatus').disabled = false;
	document.getElementById('detentionBillingAmount').disabled = false;
	document.getElementById('selectedDetentionDisputeReason').disabled = false;
	document.getElementById('remarks').disabled = false;
	return true;
}

//function to call on clicking finalize button.
function onFinalize(click) {
	document.getElementById('click').value = click;
	var canFinalize = document.getElementById('canFinalize').value;
	if (canFinalize == 'NO') {
		alert('Please Save Bill before Finalizing');
		return false;
	} else {
		return true;
	}

}

//function to call on clicking resume button.
function onResume(click) {
	document.getElementById('click').value = click;
	return true;
}

//function to call on clicking Send Draft button.
function onSendDraft(click) {

	//to validate email id
	var emailID=document.frmMain.bookedByPartyEmail;
	
	if ((emailID.value==null)||(emailID.value=="")){
		alert("Please provide the Email Id of the notification receiver in Email Id field to send the notification");
		emailID.focus();
		return false;
	}
	if (echeck(emailID.value)==false){
//		emailID.value="";
		emailID.focus();
		return false;
	}
	
	document.getElementById('click').value = click;
	return true;
}

//function to validate email id
function echeck(str) {

	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);
	if (lstr >= 100){
		alert("Email address should be less than 100 characters");
		return false;
	}

	if (str.indexOf(at)==-1){
	   alert("Please enter a valid E-mail ID");
	   return false;
	}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
	   alert("Please enter a valid E-mail ID");
	   return false;
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
	    alert("Please enter a valid E-mail ID");
	    return false;
	}

	 if (str.indexOf(at,(lat+1))!=-1){
	    alert("Please enter a valid E-mail ID");
	    return false;
	 }

	 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
	    alert("Please enter a valid E-mail ID");
	    return false;
	 }

	 if (str.indexOf(dot,(lat+2))==-1){
	    alert("Please enter a valid E-mail ID");
	    return false;
	 }
	
	 if (str.indexOf(" ")!=-1){
	    alert("Please enter a valid E-mail ID");
	    return false;
	 }

	 return true;			
}

//function to call on editing remarks.
function editRemarks() {
	document.getElementById('canFinalize').value = 'NO';
}

//function to call on editing save Bill Check Box.
function editSaveBill() {
	document.getElementById('canFinalize').value = 'NO';
}

//function to call on editing dispute reason.
function editDisputeReason() {
	document.getElementById('canFinalize').value = 'NO';
}

//function to call on editing billing amount.
function editBillingAmount() {
	document.getElementById('canFinalize').value = 'NO';
}

//function to call on clicking close dialog button.
function win_close() {

	window.opener.frmMain.submit();
	self.close();
}

//function to call on clicking close window button.
function win_unload() {

	window.opener.frmMain.submit();
}

//Javascript methods for vessel Report JSP

function exportVesselReport() {
	document.exportReport.bookingOfficeFilter.value = document.vesselReport.bookingOfficeFilter.value;
	document.exportReport.bookingTeamFilter.value = document.vesselReport.bookingTeamFilter.value;
	document.exportReport.containerSizeFilter.value = document.vesselReport.containerSizeFilter.value;
	document.exportReport.receiptModeFilter.value = document.vesselReport.receiptModeFilter.value;
	document.exportReport.tariffTypeFilter.value = document.vesselReport.tariffTypeFilter.value;
	document.exportReport.submit();
}
function myHref() {
	alert('before submit');
	document.vesselReport.submit();
	alert('after submit');
}

function FlagBookingOffice() {
	if (document.getElementById('BookingOffice1').innerHTML == 'Fold') {
		document.vesselReport.bookingOfficeFold.value = '1';
	} else {
		document.vesselReport.bookingOfficeFold.value = '0';
	}
}

function FlagBookingTeam() {
	if (document.getElementById('BookingTeam1').innerHTML == 'Fold') {
		document.vesselReport.bookingTeamFold.value = '1';
	} else {
		document.vesselReport.bookingTeamFold.value = '0';
	}
}

function FlagCustomerName() {
	if (document.getElementById('CustomerName1').innerHTML == 'Fold') {
		document.vesselReport.customerNameFold.value = '1';
	} else {
		document.vesselReport.customerNameFold.value = '0';
	}
}

function FlagServiceContractNumber() {
	if (document.getElementById('ServiceContractNumber1').innerHTML == 'Fold') {
		document.vesselReport.serviceContractNumberFold.value = '1';
	} else {
		document.vesselReport.serviceContractNumberFold.value = '0';
	}
}

function FlagBookingNumber() {
	if (document.getElementById('BookingNumber1').innerHTML == 'Fold') {
		document.vesselReport.bookingNumberFold.value = '1';
	} else {
		document.vesselReport.bookingNumberFold.value = '0';
	}
}

function href() {
	document.vesselReport.submit();
}
function makeTooltipdts(selectedVal) {
	t = document.getElementById('tooltipdts');
		if (selectedVal=="Rolled by carrier") {
		t.style['visibility'] = 'visible';
		t.innerHTML = "Rolled by carrier";}
		else if (selectedVal =="Carriers transport") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Carriers transport";

		} else if (selectedVal =="Incorrect Invoicing") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Incorrect Invoicing";

		} else if (selectedVal =="Commercial Decision-Gain Additional Business") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Commercial Decision-Gain Additional Business";
		}
		else if (selectedVal =="Commercial Decision-Compensate For Previous Service Failure") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Commercial Decision-Compensate For Previous Service Failure";
		}
		else if(selectedVal =="      ") {
			t.style['visibility'] = 'hidden';
			t.innerHTML = "      ";
		}
		//moveIt(document.getElementById('tooltip'), 'event.x', 'event.y');
		//setTimeout("tooltipTimeout()", 1500);
	}
function makeTooltipdmr(selectedVal) {
	t = document.getElementById('tooltipdmr');
		if (selectedVal=="Rolled by carrier") {
		t.style['visibility'] = 'visible';
		t.innerHTML = "Rolled by carrier";}
		else if (selectedVal =="Carriers transport") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Carriers transport";

		} else if (selectedVal =="Incorrect Invoicing") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Incorrect Invoicing";

		} else if (selectedVal =="Commercial Decision-Compensate For Previous Service Failure"){
			t.style['visibility'] = 'visible';
			t.innerHTML = "Commercial Decision-Compensate For Previous Service Failure";
		}
		else if (selectedVal =="Commercial Decision-Gain Additional Business") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Commercial Decision-Gain Additional Business";
		}
		else if(selectedVal =="      ") {
			t.style['visibility'] = 'hidden';
			t.innerHTML = "      ";
		}
		
}

function mouseXY(){var X = event.clientX+200;var Y = event.clientY;
document.getElementById("tooltipdmr").style.top=X;
document.getElementById("tooltipdmr").style.left=Y;}




