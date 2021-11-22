function startDate() {
    var today = new Date();
    var day = today.getDate();
    var month = (today.getMonth() + 1);     //variables to get local time based on computer settings
    var year = today.getFullYear();
    day = checkDate(day);
    month = checkDate(month);
    document.getElementById("date").innerHTML = day + " / " + month + " / " + year;     //date formatting
    var time = setTimeout(function(){ startTime() }, 500);      
}
function checkDate(i) {
    if (i < 10) {
        i = "0" + i;        //to make single digit months have a 0 beforehand
    }
    return i;
}
