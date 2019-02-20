//Confirmation prompt
function prompt_confirm() {
	var selValue = document.forms[0].elements["status"].value;
	if (selValue == "INACTIVE") {

		var bool = confirm("Are You sure you want to make user INACTIVE");

	} else {

		var bool = confirm("Are you sure you want to update user details ");
	}

	return bool;
}
//Close Window
function win_close() {
	self.close();
}

