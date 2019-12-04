//using strict mode reduces silent errors, improves performance, provides warnings, and fewer unsafe features
'use strict';
console.log("testing console\'s log");

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;


