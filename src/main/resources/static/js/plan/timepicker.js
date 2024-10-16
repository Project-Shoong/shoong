$(function () {
    $('#startTime').timepicker({
        timeFormat: 'HH:mm p',
        interval: 30,
        minTime: '0',
        maxTime: '23:50 pm',
        // defaultTime: 'now',
        dynamic: false,
        dropdown: true,
        scrollbar: false,
        change: function(time) {
            addItineraryTime(lastItineraryEvent, time, "startTime");
            bindItineraryTime(lastItineraryEvent, time, "startTime");
        }
    });
    $('#endTime').timepicker({
        timeFormat: 'HH:mm p',
        interval: 30,
        minTime: '0',
        maxTime: '23:50 pm',
        // defaultTime: 'now',
        dynamic: false,
        dropdown: true,
        scrollbar: false,
        change: function(time) {
            addItineraryTime(lastItineraryEvent, time, "endTime");
            bindItineraryTime(lastItineraryEvent, time, "endTime");
        }
    });
});
function startTimeNumber() {
    const value = $('#startTime').val();
    const after = value.substring(0,2) + value.substring(3,2);
    console.log(Number(after))
    return Number(after);
}
function endTimeNumber() {
    const value = $('#endTime').val();
    const after = value.substring(0,2) + value.substring(3,2);
    console.log(Number(after))
    return Number(after);
}
function parseTime(time) {
    return time.toString().split(" ")[4];
}

function parseTimeWithDayAndNight(time) {
    const timeStr = parseTime(time).split(":");
    const hour = timeStr[0];
    const minute = timeStr[1];
    // let dayOrNight;
    // if(hour>12) {
    //     dayOrNight = "오후"
    // }
    // else {
    //     dayOrNight = "오전"
    // }
    return `${hour}시 ${minute}분`;
}
