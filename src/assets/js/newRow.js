function prompt_confirm(){
	
	 var bool = confirm("Are You sure you want to make update details");
	 
		 return bool; 
	}
	
		function win_close(){
			
			if(window.opener.frmMain){
				window.opener.frmMain.submit();
			}
				 self.close();
			
		}
		

function checkFloat(val){
	
	if (isNaN(val)) {
		
		
		return false;
	}
	else{
		
		var num = val.replace(/,/gi, "")*1;
		val=num.toFixed(2);
		return val;
	}
}
function checkall(toggle){
    
    var checkedPort = document.Frm.selectedPortTerminal[0].checked;
    var checkedSite = document.Frm.selectedPortTerminal[1].checked;
    
    if(checkedPort==true)
    var elements = document.getElementsByName('cityList');
    else
    var elements = document.getElementsByName('loadPort');	
    
	var tog = document.getElementById(toggle);

	if (elements && elements.length > 0) { 

		for(var i=0;i<elements.length; i++){
			var elem = document.getElementById(elements[i].id);
			elem.checked =tog.checked ;

		}
	}
}


function disableControls(dateId){ 		
	document.getElementById(dateId).childNodes[1].disable='true'; 
	document.getElementById(dateId).childNodes[1].readOnly='readonly'; 
	document.getElementById(dateId).childNodes[1].disable=''; 
} 


function disableKeys(){ 
	var keyCode=(document.all)?event.keyCode:e.which; 
	if(keyCode==9){ 
		window.event.returnValue=true; //for allowing TAB 
	}else{ 
		window.event.returnValue=false; 
	} 
} 
function addCheckRow(tableID){
	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var idx = rowCount - 1;

	var bool1 = check(idx,table);
	

	if(bool1== true){
		var bool2 = checkVal(idx,table);
		if(bool2 == true){
			var bool3 = checkTo(idx,table);
			if(bool3){
				alert("Enter value in To Days less than 999 to add new slab");
			}
			else{
				if(idx == 6){
					alert("Maximum slabs can be 6");
				}
				else{
					for( i = 0;i<idx ; i=i+1){

						packagesfrom   = "PackagesAction_packages_" + i + "_from";
						packagesto = "PackagesAction_packages_" + i + "_to";
						packagescurrency = "PackagesAction_packages_" + i + "_currency";

						document.getElementById(packagesto).readOnly="readonly";

					}
					addRow(tableID);
				}
			}
		}
	}
}
function checkTo(idx,table){
	var row = table.rows[idx];  	
	var txt3 = row.cells[1].childNodes[0].value;
	
	if(txt3 >= 999){
		
		return true;
	}
	
	else
	{
		
		return false;
	}
}
function addRow(tableID) {
	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var idx = rowCount - 1;


	var row = table.insertRow(rowCount);
	var cell1 = row.insertCell(0);
	var fromElemnt = document.createElement("input");
	fromElemnt.type = "text";
	fromElemnt.size="4";
	fromElemnt.name = "packagesfrom"+idx;
	fromElemnt.id = "PackagesAction_packages_" + idx + "_from";
	fromElemnt.readOnly = true;
	fromElemnt.readOnly="readonly";
	fromElemnt.setAttribute("readOnly", "true");

	var txt2 = setVal(idx,table);

	fromElemnt.value =txt2;
	// adding ngModel
	fromElemnt.setAttribute("ngModel", "");
	cell1.appendChild(fromElemnt);

	var cell2 = row.insertCell(1);
	var daysElement = document.createElement("input");
	daysElement.type = "text";
	daysElement.size="4";
	daysElement.name = "packagesto"+idx;
	daysElement.id = "PackagesAction_packages_" + idx + "_to";
	// adding ngModel
	daysElement.setAttribute("ngModel", "");
	//daysElement.onchange=function(){testing(this);};


	cell2.appendChild(daysElement);

	var cell3 = row.insertCell(2);
	var currencyElement = document.createElement("input");
	currencyElement.type = "text";
	currencyElement.size="6";
	currencyElement.name = "packagescurrency"+idx;
	currencyElement.id = "PackagesAction_packages_" + idx + "_currency";
	// adding ngModel
	currencyElement.setAttribute("ngModel", "");
	cell3.appendChild(currencyElement);
	document.getElementById("PackagesAction_packages_" + idx + "_currency").maxLength=10;
	var obj =document.getElementById("rowcount");
	obj.value=rowCount;


}



function deleteRow(tableID) {
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		if(rowCount > 2) {

			rowCount = rowCount - 1;

			table.deleteRow(rowCount);
			rowCount = rowCount - 1;
			row = rowCount -1;

			packagesto = "PackagesAction_packages_" + row + "_to";

			document.getElementById(packagesto).readOnly=false;
			var obj =document.getElementById("rowcount");

			obj.value=rowCount;

		}else{
			alert("Row can't be Deleted");
		}


	}catch(e) {
		alert(e);
	}
}
function deleteMulRow(tableID) {
	try {

		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		if(rowCount > 2) {

			for(;rowCount>2;){

				rowCount = rowCount - 1;

				table.deleteRow(rowCount);
			}

			rowCount = rowCount - 1;
			row = rowCount -1;

			packagesto = "PackagesAction_packages_" + row + "_to";

			document.getElementById(packagesto).readOnly=false;
			var obj =document.getElementById("rowcount");

			obj.value=rowCount;

		}




	}catch(e) {
		alert(e);
	}
}

function checkNum(x)
{


	if (!(/^\d+$/.test(x.value)))
	{
		alert("Only Numeric Values Allowed");
		x.focus();
		return false;
	}
	else{
		return true;
	}
}
function checkVal(idx,table){
	var row =  table.rows[idx];
	txt1 = parseInt(row.cells[0].childNodes[0].value);
	txt2 = parseInt(row.cells[1].childNodes[0].value);

	if(txt1<txt2){
		return true;
	}else {
		alert("To days should be greater than From Days");
		return false;
	}

}
function setVal(idx,table){

	var row =  table.rows[idx];
	txt2 = parseInt(row.cells[1].childNodes[0].value);
	txt2=txt2+1;
	return txt2;
}

function checkLastRow(table){

	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var idx = rowCount - 1;
	bool = checkVal(idx,table);
	return bool;
}

function check(idx,table){

	var row = table.rows[idx];  

	var txt1 = row.cells[0].childNodes[0].value;
	var txt2 = row.cells[1].childNodes[0].value;
	var txt3 = row.cells[2].childNodes[0].value; 

	if(txt1 =="" || txt2 =="" || txt3 =="" ){
		alert("Please enter the value before adding a new row ");
		return false;
	}
	else {
		if(txt1 <0 || txt2 <=0 || txt3 <=0 ){
			alert("Please enter values greater than 0  before adding a new row ");
			return false;
		}
		else{
			if(!(checkNum(row.cells[0].childNodes[0]) && checkNum(row.cells[1].childNodes[0] ) )){

				return false;
			}
			else{
				if(isNaN(row.cells[2].childNodes[0].value)){
					alert("Enter Numeric Data " );
					return false;
				}else{
					var num = txt3.replace(/,/gi, "")*1;
					txt3=num.toFixed(2);
					row.cells[2].childNodes[0].value = txt3;
					return true;
				}
			}
		}
	}
}









