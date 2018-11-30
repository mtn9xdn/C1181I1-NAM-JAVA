var width;
var height;
var width = parseInt(prompt("Enter the width"));
var height = parseInt(prompt("Enter the height"));
var area = width * height;

function showArea() {
    document.getElementById("demo").innerHTML = "Area is " + area;
}