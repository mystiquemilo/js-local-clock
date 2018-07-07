//function for finding timezone string

function getTimezoneName() {
    var timeSummer = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0));
    var summerOffset = -1 * timeSummer.getTimezoneOffset();
    var timeWinter = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0));
    var winterOffset = -1 * timeWinter.getTimezoneOffset();
    var timeZoneHiddenField;
    if (-720 == summerOffset && -720 == winterOffset) { timeZoneHiddenField = 'Dateline Standard Time'; }
    else if (-660 == summerOffset && -660 == winterOffset) { timeZoneHiddenField = 'UTC-11'; }
    else if (-660 == summerOffset && -660 == winterOffset) { timeZoneHiddenField = 'Samoa Standard Time'; }
    else if (-660 == summerOffset && -600 == winterOffset) { timeZoneHiddenField = 'Hawaiian Standard Time'; }
    else if (-570 == summerOffset && -570 == winterOffset) { timeZoneHiddenField.value = 'Pacific/Marquesas'; }
    else if (-540 == summerOffset && -600 == winterOffset) { timeZoneHiddenField.value = 'America/Adak'; }
    else if (-540 == summerOffset && -540 == winterOffset) { timeZoneHiddenField.value = 'Pacific/Gambier'; }
    else if (-480 == summerOffset && -540 == winterOffset) { timeZoneHiddenField = 'Alaskan Standard Time'; }
    else if (-480 == summerOffset && -480 == winterOffset) { timeZoneHiddenField = 'Pacific/Pitcairn'; }
    else if (-420 == summerOffset && -480 == winterOffset) { timeZoneHiddenField = 'Pacific Standard Time'; }
    else if (-420 == summerOffset && -420 == winterOffset) { timeZoneHiddenField = 'US Mountain Standard Time'; }
    else if (-360 == summerOffset && -420 == winterOffset) { timeZoneHiddenField = 'Mountain Standard Time'; }
    else if (-360 == summerOffset && -360 == winterOffset) { timeZoneHiddenField = 'Central America Standard Time'; }
    else if (-360 == summerOffset && -300 == winterOffset) { timeZoneHiddenField = 'Pacific/Easter'; }
    else if (-300 == summerOffset && -360 == winterOffset) { timeZoneHiddenField = 'Central Standard Time'; }
    else if (-300 == summerOffset && -300 == winterOffset) { timeZoneHiddenField = 'SA Pacific Standard Time'; }
    else if (-240 == summerOffset && -300 == winterOffset) { timeZoneHiddenField = 'Eastern Standard Time'; }
    else if (-270 == summerOffset && -270 == winterOffset) { timeZoneHiddenField = 'Venezuela Standard Time'; }
    else if (-240 == summerOffset && -240 == winterOffset) { timeZoneHiddenField = 'SA Western Standard Time'; }
    else if (-240 == summerOffset && -180 == winterOffset) { timeZoneHiddenField = 'Central Brazilian Standard Time'; }
    else if (-180 == summerOffset && -240 == winterOffset) { timeZoneHiddenField = 'Atlantic Standard Time'; }
    else if (-180 == summerOffset && -180 == winterOffset) { timeZoneHiddenField = 'Montevideo Standard Time'; }
    else if (-180 == summerOffset && -120 == winterOffset) { timeZoneHiddenField = 'E. South America Standard Time'; }
    else if (-150 == summerOffset && -210 == winterOffset) { timeZoneHiddenField = 'Mid-Atlantic Standard Time'; }
    else if (-120 == summerOffset && -180 == winterOffset) { timeZoneHiddenField = 'America/Godthab'; }
    else if (-120 == summerOffset && -120 == winterOffset) { timeZoneHiddenField = 'SA Eastern Standard Time'; }
    else if (-60 == summerOffset && -60 == winterOffset) { timeZoneHiddenField = 'Cape Verde Standard Time'; }
    else if (0 == summerOffset && -60 == winterOffset) { timeZoneHiddenField = 'Azores Daylight Time'; }
    else if (0 == summerOffset && 0 == winterOffset) { timeZoneHiddenField = 'Morocco Standard Time'; }
    else if (60 == summerOffset && 0 == winterOffset) { timeZoneHiddenField = 'GMT Standard Time'; }
    else if (60 == summerOffset && 60 == winterOffset) { timeZoneHiddenField = 'Africa/Algiers'; }
    else if (60 == summerOffset && 120 == winterOffset) { timeZoneHiddenField = 'Namibia Standard Time'; }
    else if (120 == summerOffset && 60 == winterOffset) { timeZoneHiddenField = 'Central European Standard Time'; }
    else if (120 == summerOffset && 120 == winterOffset) { timeZoneHiddenField = 'South Africa Standard Time'; }
    else if (180 == summerOffset && 120 == winterOffset) { timeZoneHiddenField = 'GTB Standard Time'; }
    else if (180 == summerOffset && 180 == winterOffset) { timeZoneHiddenField = 'E. Africa Standard Time'; }
    else if (240 == summerOffset && 180 == winterOffset) { timeZoneHiddenField = 'Russian Standard Time'; }
    else if (240 == summerOffset && 240 == winterOffset) { timeZoneHiddenField = 'Arabian Standard Time'; }
    else if (270 == summerOffset && 210 == winterOffset) { timeZoneHiddenField = 'Iran Standard Time'; }
    else if (270 == summerOffset && 270 == winterOffset) { timeZoneHiddenField = 'Afghanistan Standard Time'; }
    else if (300 == summerOffset && 240 == winterOffset) { timeZoneHiddenField = 'Pakistan Standard Time'; }
    else if (300 == summerOffset && 300 == winterOffset) { timeZoneHiddenField = 'West Asia Standard Time'; }
    else if (330 == summerOffset && 330 == winterOffset) { timeZoneHiddenField = 'India Standard Time'; }
    else if (345 == summerOffset && 345 == winterOffset) { timeZoneHiddenField = 'Nepal Standard Time'; }
    else if (360 == summerOffset && 300 == winterOffset) { timeZoneHiddenField = 'N. Central Asia Standard Time'; }
    else if (360 == summerOffset && 360 == winterOffset) { timeZoneHiddenField = 'Central Asia Standard Time'; }
    else if (390 == summerOffset && 390 == winterOffset) { timeZoneHiddenField = 'Myanmar Standard Time'; }
    else if (420 == summerOffset && 360 == winterOffset) { timeZoneHiddenField = 'North Asia Standard Time'; }
    else if (420 == summerOffset && 420 == winterOffset) { timeZoneHiddenField = 'SE Asia Standard Time'; }
    else if (480 == summerOffset && 420 == winterOffset) { timeZoneHiddenField = 'North Asia East Standard Time'; }
    else if (480 == summerOffset && 480 == winterOffset) { timeZoneHiddenField = 'China Standard Time'; }
    else if (540 == summerOffset && 480 == winterOffset) { timeZoneHiddenField = 'Yakutsk Standard Time'; }
    else if (540 == summerOffset && 540 == winterOffset) { timeZoneHiddenField = 'Tokyo Standard Time'; }
    else if (570 == summerOffset && 570 == winterOffset) { timeZoneHiddenField = 'Cen. Australia Standard Time'; }
    else if (570 == summerOffset && 630 == winterOffset) { timeZoneHiddenField = 'Australia/Adelaide'; }
    else if (600 == summerOffset && 540 == winterOffset) { timeZoneHiddenField = 'Asia/Yakutsk'; }
    else if (600 == summerOffset && 600 == winterOffset) { timeZoneHiddenField = 'E. Australia Standard Time'; }
    else if (600 == summerOffset && 660 == winterOffset) { timeZoneHiddenField = 'AUS Eastern Standard Time'; }
    else if (630 == summerOffset && 660 == winterOffset) { timeZoneHiddenField = 'Australia/Lord_Howe'; }
    else if (660 == summerOffset && 600 == winterOffset) { timeZoneHiddenField = 'Tasmania Standard Time'; }
    else if (660 == summerOffset && 660 == winterOffset) { timeZoneHiddenField = 'West Pacific Standard Time'; }
    else if (690 == summerOffset && 690 == winterOffset) { timeZoneHiddenField = 'Central Pacific Standard Time'; }
    else if (720 == summerOffset && 660 == winterOffset) { timeZoneHiddenField = 'Magadan Standard Time'; }
    else if (720 == summerOffset && 720 == winterOffset) { timeZoneHiddenField = 'Fiji Standard Time'; }
    else if (720 == summerOffset && 780 == winterOffset) { timeZoneHiddenField = 'New Zealand Standard Time'; }
    else if (765 == summerOffset && 825 == winterOffset) { timeZoneHiddenField = 'Pacific/Chatham'; }
    else if (780 == summerOffset && 780 == winterOffset) { timeZoneHiddenField = 'Tonga Standard Time'; }
    else if (840 == summerOffset && 840 == winterOffset) { timeZoneHiddenField = 'Pacific/Kiritimati'; }
    else { timeZoneHiddenField = 'US/Pacific'; }
    return timeZoneHiddenField;
}
//function to return day of month
function showDay(){
    var currentFull=new Date();
    var daysAr = new Array();
    daysAr[0] = "Sunday";
    daysAr[1] = "Monday";
    daysAr[2] = "Tuesday";
    daysAr[3] = "Wednasday";
    daysAr[4] = "Thrusday";
    daysAr[5] = "Friday";
    daysAr[6] = "Saturday";
    return dayToday = daysAr[currentFull.getDay()];
    
}

//function returns current local month
function showMonth(){
    var currentFull=new Date();
    var monthAr = new Array();
    monthAr[0] = "January";
    monthAr[1] = "February";
    monthAr[2] = "March";
    monthAr[3] = "April";
    monthAr[4] = "May";
    monthAr[5] = "June";
    monthAr[6] = "July";
    monthAr[7] = "August";
    monthAr[8] = "September";
    monthAr[9] = "October";
    monthAr[10] = "November";
    monthAr[11] = "December";
    return month = monthAr[currentFull.getMonth()];
}

//getting clients local time
function display(){
    var show=setInterval(function(){
    var currentFull=new Date();
    var hr=currentFull.getHours();      
    var min=currentFull.getMinutes();
    var sec=currentFull.getSeconds();
    var msec=currentFull.getMilliseconds();
    var date=currentFull.getDate();
    var year=currentFull.getFullYear();
    var day=currentFull.getDay();
    var variable="";
    if(hr>12){
        hr=hr-12;
        variable="PM";
    }
    else{
        variable="AM";
        hr=hr;
    }
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    document.getElementById('hours').innerHTML = hr;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('variable').innerHTML = variable;
    document.getElementById('day').innerHTML = showDay();
    document.getElementById('month').innerHTML = showMonth();
    document.getElementById('date').innerHTML = date;
    document.getElementById('year').innerHTML = year;
    document.getElementById('zone').innerHTML = getTimezoneName();
    },100);   


//something changed here

}


window.onload=display;