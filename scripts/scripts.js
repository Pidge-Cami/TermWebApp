//---------------RESPONSIVE MENU SCRIPT--------------------


 /* Toggle between adding and removing te "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
	var x = document.getElementById("primaryNavigation");
	if (x.className === "show") {
		x.className = "hide";
	} else {
		x.className = "show";
	}
}

//---------------CURRENT DATE SCRIPT----------------------------

function getADate() {
        var d = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var theMonth = monthNames[d.getMonth()];
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var theDay = dayNames[d.getDay()];
        var theDate = d.getDate();
        var theYear = d.getFullYear();
        document.getElementById("date").innerHTML = theDay + ", " + theDate + " " + theMonth + " " + theYear;
      }



