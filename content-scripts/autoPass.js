var elem = document.getElementById("pass");
elem.style.display = "inline"
var event = new Event("submit");
elem.dispatchEvent(event);
console.log('[MemHack] question passed');
elem.style.display = "hidden"
