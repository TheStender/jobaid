function dueDate() {
    var dayMS = new Date().getTime() + (86400000 * 4);
    var ifSaturday = new Date().getTime() + (86400000 * 3);
    var ifSunday = new Date().getTime() + (86400000 * 2);
    var taskDate = new Date(dayMS);

    var dayOfWeek = taskDate.getDay();
    if (dayOfWeek == 0) {
        var taskDate = new Date(ifSunday)
    } else if (dayOfWeek == 6) {
        var taskDate = new Date(ifSaturday)
    } else {
        taskDate = taskDate;
    }

    var month = taskDate.getMonth() + 1;
    var day = taskDate.getDate();
    var year = taskDate.getFullYear();
    var newdate = month + "/" + day + "/" + year;

    document.getElementById("demo").innerHTML = "The due date is: " + newdate;

    var dayHold = new Date().getTime() + (86400000 * 29);
    var holdDate = new Date(dayHold);
    var holdMonth = holdDate.getMonth() + 1;
    var holdDay = holdDate.getDate();
    var holdYear = holdDate.getFullYear();
    var newHoldDate = holdMonth + "/" + holdDay + "/" + holdYear;
    document.getElementById("holdDate").innerHTML = "The 30 day hold date is: " + newHoldDate;

}


function getNote(message) {
    var message = message;
    let textarea = document.createElement('textarea');
    textarea.textContent = message;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.setAttribute("hidden", true);
}

$(document).ready(function () {

    $("#taskNoteButton").click(function () {
        $(this).toggleClass("btn-danger btn-success ");
    });

    $("#clientNoteButton").click(function () {
        $(this).toggleClass("btn-danger btn-success ");
    });
	
});