const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
if (day == 'Sunday' || day == 'Thursday') {
    document.getElementById('Industrial').style.display = 'block';

}
else {
    document.getElementById('Industrial').style.display = 'none';
}
if (day == 'Saturday' || day == 'Monday' || day == 'Tuesday') {
    document.getElementById('Microproscessor').style.display = 'block';

}
else {
    document.getElementById('Microproscessor').style.display = 'none';
}
if (day == 'Monday' || day == 'Wednesday') {
    document.getElementById('Environmental').style.display = 'block';

}
else {
    document.getElementById('Environmental').style.display = 'none';
}
if (day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday') {
    document.getElementById('Database').style.display = 'block';

}
else {
    document.getElementById('Database').style.display = 'none';
}
if (day == 'Saturday' || day == 'Tuesday' || day == 'Thuesday') {
    document.getElementById('Software').style.display = 'block';

}
else {
    document.getElementById('Software').style.display = 'none';
}
if (day == 'Saturday' || day == 'Sunday' || day == 'Monday') {
    document.getElementById('Network').style.display = 'block';

}
else {
    document.getElementById('Network').style.display = 'none';
}
if (day == 'Sunurday' || day == 'Wednesday') {
    document.getElementById('Microcontroller').style.display = 'block';

}
else {
    document.getElementById('Microcontroller').style.display = 'none';
}
