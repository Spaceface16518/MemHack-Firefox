var elem = document.getElementById("pass__pass");
var event = new Event("submit"); // (*)
elem.dispatchEvent(event);
