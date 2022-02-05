


window.addEventListener('DOMContentLoaded', event => {
 

let personName = sessionStorage.getItem("inputUsername");
var queryString = location.search.substring(1);
var a = queryString.split("|"); // which creates an array

var value1 = a[0];
var value2 = a[1];
var value3 = a[2];
if (value1.length==0){
    window.location.href = "404.html";
}else{
document.getElementById('dashboardTitleID').innerHTML = "Dashboard " + value1;
}

});