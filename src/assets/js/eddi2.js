function doNavigate(pstrWhere, pintTot) {
	var strTmp;
	var intPg;
	strTmp = document.frmMain.txtCurr.value;
	intPg = parseInt(strTmp);
	if (isNaN(intPg)) {
		intPg = 1;
	}
	if ((pstrWhere == "F" || pstrWhere == "P") && intPg == 1) {
		alert("You are already viewing first page!");
		return;
	} else {
		if ((pstrWhere == "N" || pstrWhere == "L") && intPg == pintTot) {
			alert("You are already viewing last page!");
			return;
		}
	}
	if (pstrWhere == "F") {
		intPg = 1;
	} else {
		if (pstrWhere == "P") {
			intPg = intPg - 1;
		} else {
			if (pstrWhere == "N") {
				intPg = intPg + 1;
			} else {
				if (pstrWhere == "L") {
					intPg = pintTot;
				}
			}
		}
	}
	if (intPg < 1) {
		intPg = 1;
	}
	if (intPg > pintTot) {
		intPg = pintTot;
	}
	//check applied specifically for job admin screen to make pagination work after being returned from Re-calculation screen
	if(document.getElementById("editJobBookingStatus")!=null && document.getElementById("editJobDemDetCalcStatus")!=null)
	{
		document.frmMain.editJobBookingStatus.value="";
		document.frmMain.editJobDemDetCalcStatus.value="";
		document.frmMain.action="VesselJobAdministration";
	}
	document.frmMain.txtCurr.value = intPg;
	document.frmMain.submit();
}

function applyFilter(){
	document.getElementById('txtCurr').value='1';
	document.frmMain.editJobBookingStatus.value="";
	document.frmMain.editJobDemDetCalcStatus.value="";
	document.frmMain.action="VesselJobAdministration";
	document.frmMain.submit();
}

function onFilterChange(){
	document.getElementById('txtCurr').value='1';
	document.frmMain.submit();
}

function goBack(){
	document.frmBack.userIdFilter.value = document.frmMain.userIdFilter.value;
	document.frmBack.vesselVoyageFilter.value = document.frmMain.vesselVoyageFilter.value;
	document.frmBack.loadPortFilter.value = document.frmMain.loadPortFilter.value;
	document.frmBack.gcssStatusFilter.value = document.frmMain.gcssStatusFilter.value;
	document.frmBack.dndStatusFilter.value = document.frmMain.dndStatusFilter.value;
	document.frmBack.startDateFilter.value = document.frmMain.startDateFilter.value;
	document.frmBack.action="VesselJobAdministration";
	document.frmBack.submit();
}

function doSort(pstrFld, pstrOrd) {

	document.frmMain.txtSortCol.value = pstrFld;
	document.frmMain.txtSortAsc.value = pstrOrd;
	document.frmMain.submit();
}
function viewLog(JobId, UserId, JobType) {
	document.frmViewBookingLog.jobId.value = JobId;
	document.frmViewBookingLog.userId.value = UserId;
	document.frmViewBookingLog.jobType.value = JobType;
	document.frmViewBookingLog.submit();
}
function viewGeoLog(batchId, extractTime) {
	document.frmViewGeoMessageLog.batchId.value = batchId;
	document.frmViewGeoMessageLog.extractTime.value = extractTime;
	document.frmViewGeoMessageLog.submit();
}
function updateIgnoreBatch(batchId,ignoreBatch) {
	if(ignoreBatch=="N"){
		var r=confirm("Confirm batch sequence to be ignored for Batch Id:- "+batchId); 
		if (r==true) 
		{ 
			document.frmUpdateBatchSeq.batchId.value = batchId;
			document.frmUpdateBatchSeq.numBatchFilter.value=document.frmMain.numBatchFilter.value;
			document.frmUpdateBatchSeq.numDaysFilter.value=document.frmMain.numDaysFilter.value;
			document.frmUpdateBatchSeq.processStateListFilter.value=document.frmMain.processStateListFilter.value;
			document.frmUpdateBatchSeq.submit();	
		}
	} else{
		alert('Batch Id:- '+batchId+' already ignored.');
	}
}
	// function for persisting the state of view geo monitor screen while returning from viewgeo log screen////
function returntoGeoMonitor()
{
		document.formBack.numDaysFilter.value = document.frmMain.numDaysFilter.value;
		document.formBack.processStateListFilter.value = document.frmMain.processStateListFilter.value;
		document.formBack.numBatchFilter.value = document.frmMain.numBatchFilter.value;
		document.formBack.textCurr.value = document.frmMain.textCurr.value;
		document.formBack.submit();
		
}
function showDivResponseMessage() {
	value = document.getElementById('messageButton').value;
	if (value == "Hide Response Message") {
		document.getElementById('responseMessageDiv').style.display = 'none';
		document.getElementById('messageButton').value = "View Response Message";
	} else {
		document.getElementById('responseText').style.width=window.screen.availWidth*94/100 + "px";
		document.getElementById('responseMessageDiv').style.display = 'block';
		document.getElementById('messageButton').value = "Hide Response Message";
		
	}
}

function doEdit(jobId,bookingStatus,demDetCalcStatus,dueBillReady,restartStatus){
	document.frmMain.editJobId.value=jobId;
	document.frmMain.editJobBookingStatus.value=bookingStatus;
	document.frmMain.editJobDemDetCalcStatus.value=demDetCalcStatus;
	document.frmMain.editJobDueBillReady.value=dueBillReady;
	document.frmMain.editJobRestartStatus.value=restartStatus;
	document.frmMain.submit();
}

function openBill(container,bookingNumber,currency,loadPortCode,vesselCode,voyageNumber,imageUrl)
{
	//RQ-9617
	//Author: TCS
	//Dated: 11th May,2011
	//In the above function param <imageUrl> is a new addition.
	//Description: Changes with respect to Action Button on Query Builder Report Screen
	//Different conditional check applied for different action images,
	//and therefore redirected to further screen accordingly.
	// Added change to remove scroll bar from billing screen - RQ10255 - TCS
	var w = 1100, h = 550, t=0; // default sizes
	var t=(window.screen.height-window.screen.availHeight);
    if (window.screen) {
        w = window.screen.availWidth* 98/ 100;
        h = window.screen.availHeight * 97 / 100;
       
    }
    
	if(imageUrl!="images/Act3.gif" && imageUrl!="images/Act4.gif")
	{
		url="populateBillingDetail.action?CON="+container+"&BON="+bookingNumber+"&CUR="+currency+"&LOP="+loadPortCode+"&VOC="+vesselCode+"&VON="+voyageNumber;
	BillWindow=window.open(url,"mywindow","toolbar=no,scrollbars=yes,directories=no,location=no ,status=no,menubar=no,width="+w+",height="+h);
	BillWindow.moveTo(0,t/3);
	}
	
}

function exportVesselDetail(){
	document.exportVesselDetails.txtSortCol.value=document.frmMain.txtSortCol.value;
	document.exportVesselDetails.txtSortAsc.value=document.frmMain.txtSortAsc.value;
	document.exportVesselDetails.billingStatusFilter.value=document.frmMain.billingStatusFilter.value;
	document.exportVesselDetails.contrsizeFilter.value=document.frmMain.contrsizeFilter.value;
	document.exportVesselDetails.officeFilter.value=document.frmMain.officeFilter.value;
	document.exportVesselDetails.teamFilter.value=document.frmMain.teamFilter.value;
	document.exportVesselDetails.recmodeFilter.value=document.frmMain.recmodeFilter.value;
	document.exportVesselDetails.tariffFilter.value=document.frmMain.tariffFilter.value;
	document.exportVesselDetails.contractualcustomerFilter.value=document.frmMain.contractualcustomerFilter.value;
	document.exportVesselDetails.dueTypeFilter.value=document.frmMain.dueTypeFilter.value;
	document.exportVesselDetails.submit();
}
// function for persisting the state of vessel summary screen when returning from vessel deatil screen////
function returntovesselsummary(){
	document.returntovesselsum.completionStatusFilter.value = document.frmMain.completionStatusFilter.value;
	document.returntovesselsum.loadPortFilter.value = document.frmMain.loadPortFilter.value;
	document.returntovesselsum.vslVygFltr.value = document.frmMain.vslVygFltr.value;
	document.returntovesselsum.bookingOfficeFilter.value = document.frmMain.bookingOfficeFilter.value;
	document.returntovesselsum.bookingTeamFilter.value = document.frmMain.bookingTeamFilter.value;
	document.returntovesselsum.departureStatusFilter.value = document.frmMain.departureStatusFilter.value;
	document.returntovesselsum.textCurr.value = document.frmMain.textCurr.value;
	document.returntovesselsum.submit();
}
function callExportQueryBuilderDetails()
{
	document.exportQueryBuilderDetailsForm.action="exportQueryBuilderDetails";
	document.exportQueryBuilderDetailsForm.submit();
}

function returnToQueryBuilder()
{
	document.exportQueryBuilderDetailsForm.action="populateQueryBuilder";
	document.exportQueryBuilderDetailsForm.submit();
}

function disableControls(){ 
	document.getElementById('revisedLoadDate').childNodes[1].disable='true'; 
	document.getElementById('revisedLoadDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('revisedLoadDate').childNodes[1].disable=''; 
	} 

function disableKeys(){ 
    var keyCode=(document.all)?event.keyCode:e.which; 
    if(keyCode==9){ 
            window.event.returnValue=true; //for allowing TAB 
    }else{ 
            window.event.returnValue=false; 
    } 
} 

function disableControlsAddNewDet(){ 
	document.getElementById('detEndEventDate').childNodes[1].disable='true'; 
	document.getElementById('detEndEventDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('detEndEventDate').childNodes[1].disable=''; 
	}

function disableControlsAddNewDem(){ 
	document.getElementById('endDemEventDate').childNodes[1].disable='true'; 
	document.getElementById('endDemEventDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('endDemEventDate').childNodes[1].disable=''; 
	}

function disableControlsRecalcDet(){ 
	document.getElementById('revDetEndEvntDate').childNodes[1].disable='true'; 
	document.getElementById('revDetEndEvntDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('revDetEndEvntDate').childNodes[1].disable=''; 
	}

function disableControlsRecalcDem(){ 
	document.getElementById('revDemEndEvntDate').childNodes[1].disable='true'; 
	document.getElementById('revDemEndEvntDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('revDemEndEvntDate').childNodes[1].disable=''; 
	}

function resetForm()
{
	document.addNewVesselForm.action="AddJob!clear.action";
	document.addNewVesselForm.submit();
}

function  openBillDetails() {
	//alert('fooo');
	var w = 1100, h = 550, t=0; // default sizes
	var t=(window.screen.height-window.screen.availHeight);
    if (window.screen) {
        w = window.screen.availWidth* 98/ 100;
        h = window.screen.availHeight * 97 / 100;
       
    }
    window.open('/bill-details',"mywindow","toolbar=no,scrollbars=yes,directories=no,location=no ,status=no,menubar=no,width="+w+",height="+h);
  }
