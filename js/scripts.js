$(document).ready(function(){
var userAge = parseInt(prompt("How old are you?"));

if(userAge >= 18){
    $(".votingLocations").show();
}   else {
    $(".underageLocations").show();
}
});