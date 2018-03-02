var elem = document.getElementById("pass__pass");
var event = new Event("click"); // (*)
elem.dispatchEvent(event);
console.log('[MemHack] question passed')
