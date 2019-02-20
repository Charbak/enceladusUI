/** To check configuration exists on changing the country drop down value
 * 
 */
function checkCountryConfig()
{
	var countryValue = document.getElementById("country").value;
	
	$.ajax({
		
		url : 'fetchDDConfigurationCountryData.action',				
		data : {"countryVal":countryValue},
		type : 'post',
		success : function(data) {
			var countryData = data.dDConfigData;
			
			if(countryData=="true")
			{
				alert("Detention & Demurrage Configuration Already Exists for the selected country");	
			}
			else
			{
				return false;
			}
		},
		error:function(xhr, ajaxOptions,thrownError){
			alert("Unable to reach server Reason:- "+xhr.status);
			alert("Error thrown:- "+thrownError);
		}
	});
}
 /**
  * Prompt the confirmation before creating the records 
  * 
  */
 function prompt_create_confirm(){
 	
	 var chargeTypeValue = document.getElementById("chargeType").value;
	 var status = true;
	 var countryValue = document.getElementById("country").value;
	 
	 if(countryValue=="-1")
	 {
		 alert("Please Select the country");
		 status = false;
		 return status;
	 }
	 if(chargeTypeValue=="DETENTION ONLY")
	 {
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
				&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
		 {
			alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention Only");
			status =  false;
			return status;
		 }
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false)
		 {
			 alert("Please select the option Include Start Event Date value for Detention Only");
			 status = false;
			 return status;
		 }
		 
		 if(document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
		 {
			 alert("Please select the option Exclude Shipper Owned Containers for Detention Only");
			 status = false;
			 return status; 
		 }
	 }
	 
	 if(chargeTypeValue=="DEMURRAGE ONLY")
	 {
		 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
					&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Demurrage Only");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Demurrage Only");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Demurrage Only");
				 status = false;
				 return status; 
			 }
	 }
	 
	 if(chargeTypeValue=="COMBINED DETENTION")
	 {
		 if(document.Frm.comDetStartEventDate[0].checked==false && document.Frm.comDetStartEventDate[1].checked==false
					&& document.Frm.comDetExShip[0].checked==false && document.Frm.comDetExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Combined Detention");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.comDetStartEventDate[0].checked==false && document.Frm.comDetStartEventDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Combined Detention");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.comDetExShip[0].checked==false && document.Frm.comDetExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Combined Detention");
				 status = false;
				 return status; 
			 }
	 }
	 
	 if(chargeTypeValue=="DETENTION AND DEMURRAGE")
	 {
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
					&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false
					&& document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
					&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention and Demurrage");
				status =  false;
				return status;
			 }
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
					&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Detention");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Detention");
				 status = false;
				 return status; 
			 }
			
			 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
						&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
				 {
					alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Demurrage");
					status =  false;
					return status;
				 }
				 
				 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false)
				 {
					 alert("Please select the option Include Start Event Date value for Demurrage");
					 status = false;
					 return status;
				 }
				 
				 if(document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
				 {
					 alert("Please select the option Exclude Shipper Owned Containers for Demurrage");
					 status = false;
					 return status; 
				 }
	 }
	 
	 return status;
 		
 }
 
 
function showDetDemDivs()
{
	
	var chargeTypeVal = document.getElementById("chargeType").value;
	
	if(chargeTypeVal=="DETENTION ONLY")
	{
		document.getElementById("div1").style.display='block';
		document.getElementById("div2").style.display='none';
		document.getElementById("div3").style.display='none';
		
		document.Frm.detStartEvenDate[0].checked=false;
		document.Frm.detStartEvenDate[1].checked=false;
		document.Frm.detExShip[0].checked=false;
	    document.Frm.detExShip[1].checked=false;
	    document.getElementById("detEndEventDate").value='Gate-In EXP FULL';
	    document.getElementById("detServiceMode").value='None';
	}
	else if(chargeTypeVal=="DEMURRAGE ONLY")
	{
		document.getElementById("div2").style.display='block';
		document.getElementById("div1").style.display='none';
		document.getElementById("div3").style.display='none';
		
		document.Frm.demStartEvenDate[0].checked=false;
		document.Frm.demStartEvenDate[1].checked=false;
	    document.Frm.demExShip[0].checked=false;
	    document.Frm.demExShip[1].checked=false;
		
	    document.getElementById("demEndEventDate").value='RKEM LOAD DATE';
	    document.getElementById("demServiceMode").value='None';
	}
	else if(chargeTypeVal=="COMBINED DETENTION")
	{
		document.getElementById("div3").style.display='block';
		document.getElementById("div2").style.display='none';
		document.getElementById("div1").style.display='none';
		
		document.Frm.comDetStartEventDate[0].checked=false;
		document.Frm.comDetStartEventDate[1].checked=false;
	    document.Frm.comDetExShip[0].checked=false;
	    document.Frm.comDetExShip[1].checked=false;
	
	    document.getElementById("comDetEndEventDate").value='RKEM LOAD DATE';
	    document.getElementById("comDetServiceMode").value='None';
	    
	}
	else
	{
		document.getElementById("div1").style.display='block';
		document.getElementById("div2").style.display='block';
		document.getElementById("div3").style.display='none';
		
		document.Frm.detStartEvenDate[0].checked=false;
		document.Frm.detStartEvenDate[1].checked=false;
		document.Frm.detExShip[0].checked=false;
	    document.Frm.detExShip[1].checked=false;
	    
	    document.Frm.demStartEvenDate[0].checked=false;
		document.Frm.demStartEvenDate[1].checked=false;
	    document.Frm.demExShip[0].checked=false;
	    document.Frm.demExShip[1].checked=false;
		
	    document.getElementById("detEndEventDate").value='Gate-In EXP FULL';
	    document.getElementById("demEndEventDate").value='RKEM LOAD DATE';
	    document.getElementById("detServiceMode").value='None';
	    document.getElementById("demServiceMode").value='None';
	}
}

/*function uncheckedDetStartEvent(){
	
	var detStartEvenDateY = document.Frm.detStartEvenDate[0].checked;
	var detStartEvenDateN = document.Frm.detStartEvenDate[1].checked;
	
		if(detStartEvenDateY==true){
			document.Frm.detStartEvenDate[0].checked = false;
		}
		if(detStartEvenDateN==true){
			document.Frm.detStartEvenDate[1].checked = false;
		}
}*/

/**
 * Prompt the confirmation before updating the records 
 * 
 */
function prompt_update_confirm(){
	
	var chargeTypeValue = document.getElementById("chargeType").value;
	 var status = true;
	 
	 if(chargeTypeValue=="DETENTION ONLY")
	 {
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
				&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
		 {
			alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention Only");
			status =  false;
			return status;
		 }
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false)
		 {
			 alert("Please select the option Include Start Event Date value for Detention Only");
			 status = false;
			 return status;
		 }
		 
		 if(document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
		 {
			 alert("Please select the option Exclude Shipper Owned Containers for Detention Only");
			 status = false;
			 return status; 
		 }
	 }
	 
	 if(chargeTypeValue=="DEMURRAGE ONLY")
	 {
		 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
					&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Demurrage Only");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Demurrage Only");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Demurrage Only");
				 status = false;
				 return status; 
			 }
	 }
	 
	 if(chargeTypeValue=="COMBINED DETENTION")
	 {
		 if(document.Frm.comDetStartEventDate[0].checked==false && document.Frm.comDetStartEventDate[1].checked==false
					&& document.Frm.comDetExShip[0].checked==false && document.Frm.comDetExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Combined Detention");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.comDetStartEventDate[0].checked==false && document.Frm.comDetStartEventDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Combined Detention");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.comDetExShip[0].checked==false && document.Frm.comDetExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Combined Detention");
				 status = false;
				 return status; 
			 }
	 }
	 
	 if(chargeTypeValue=="DETENTION AND DEMURRAGE")
	 {
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
					&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false
					&& document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
					&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention and Demurrage");
				status =  false;
				return status;
			 }
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
					&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Detention");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Detention");
				 status = false;
				 return status; 
			 }
			
			 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
						&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
				 {
					alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Demurrage");
					status =  false;
					return status;
				 }
				 
				 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false)
				 {
					 alert("Please select the option Include Start Event Date value for Demurrage");
					 status = false;
					 return status;
				 }
				 
				 if(document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
				 {
					 alert("Please select the option Exclude Shipper Owned Containers for Demurrage");
					 status = false;
					 return status; 
				 }
	 }
	 
	 //return status;
	   if(status==true)
	   {
		   var bool = confirm("Are You sure to make update details");
		   return bool;
	   }
	   else
		   return false;
		
}

function loadPortList(){
		document.myForm.action = 'populateLoadPort';
		document.myForm.submit();
}


/**
 * Close the child window and refresh the parent window as well
 * 
 */
function win_close(){
	window.opener.frmMain.submit();
	self.close();
}

/**
 * Open the new action and passed the parameter as request to it.
 * @param url
 * @param countryCode
 * @param chargeType
 * @return
 */
function doEdit(url,countryCode,chargeType){
	
	w = window.screen.availWidth* 95/ 100;
    h = window.screen.availHeight * 77 / 100;
    var t=(window.screen.height-window.screen.availHeight);
	url = url + "?countryCode=" + countryCode + "&chargeType=" + chargeType;
	mywindow = window.open(url,"mywindow","toolbar=no,directories=no,location=no, status=no,menubar=no,width="+w+",height="+h);
	mywindow.moveTo(0,t/3);
}


/**
 * Populate the screen with the value from database
 * 
 */
function populate_update(){
    
	var chargeTypeValue = document.getElementById("selectedChargeTypeValue").value;

	if(chargeTypeValue=="DETENTION ONLY")
	{
		document.getElementById("div1").style.display='block';
		document.getElementById("div2").style.display='none';
		document.getElementById("div3").style.display='none';
	}
	
	 if(chargeTypeValue=="DEMURRAGE ONLY")
	{
		document.getElementById("div2").style.display='block';
		document.getElementById("div1").style.display='none';
		document.getElementById("div3").style.display='none';
	}
		
	if(chargeTypeValue=="COMBINED DETENTION")
	{
		document.getElementById("div3").style.display='block';
		document.getElementById("div2").style.display='none';
		document.getElementById("div1").style.display='none';
	}
	
	if(chargeTypeValue=="DETENTION AND DEMURRAGE")
	{
		document.getElementById("div1").style.display='block';
		document.getElementById("div2").style.display='block';
		document.getElementById("div3").style.display='none';
	}
}


