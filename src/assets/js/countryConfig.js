function checkall(bool) {
	

	var elements = document.getElementsByName('days');

	if (elements && elements.length > 0) {

		

		for ( var i = 0; i < elements.length; i++) {
			var elem = document.getElementById(elements[i].id);
			elem.disabled = bool;
			if (bool == true) {
				elem.checked = false;
			}
		}
	}
}
function radioCheck(radioObj) {

	var elements = document.getElementsByName("typeDays");
	var elementsCheck = document.getElementsByName("days");
	if (elements && elements.length > 0) {

		
		var elem = document.getElementById(elements[0].id);
		if (elem.checked)

			checkall(true);

		else
			checkall(false);

	}

}