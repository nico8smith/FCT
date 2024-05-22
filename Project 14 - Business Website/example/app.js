// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    document.getElementById("everything").style.display = "none";
    document.getElementById("purpledrink").style.display = "block";
}
function displayDog() {
    document.getElementById("dogContent").style.display = "block";
    document.getElementById("catContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayCat() {
    document.getElementById("dogContent").style.display = "none";
    document.getElementById("catContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function purpleBackground() {
    document.body.style.backgroundColor = "purple";
    console.log(document)
}