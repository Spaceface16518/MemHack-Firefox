var elem = document.getElementById("pass");
var event = new Event("click"); // (*)
elem.dispatchEvent(event);
console.log('[MemHack] question passed')
