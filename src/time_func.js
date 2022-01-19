/**
    TIME FUNCTIONS
    Houses all time-related functions

    @author SKYE KYCHENTHAL
    @author Peddie Robotics
*/

/**
*   @description Converts minutes to a read-able format.
*   @param {Int} t - turns an int into a time string.
*       5 --> 05
*       15 --> 15
*   @returns {String}
*/
function convertMin (t) {
    if (t.toString().length == 1)
        return '0' + t
    return t;
}
/**
*   @description Converts hours to a read-able format.
*   @param {Int} t - turns an 24-hr int into a time string.
*   @returns {String}
*/
function convertHr (t) { // Converts hours from Military to normal
    let _t = t - 12;
    if (_t < 0)
        return Math.abs(12+_t);
    return Math.abs(_t)
}
/**
*   @description Gets whether an hour is in the AM or PM
*   @param {Int} t - 24hr int
*   @returns {String}
*/
function AM_PM (t) { // Gets AM / PM
    let _t = t - 12;
    if (_t < 0)
        return "AM"
    return "PM"
}

/**
*   https://stackoverflow.com/questions/4631928/convert-utc-epoch-to-local-date/22237139
* 
*   Turns an epoch timem into a date-time time
*   @param {Int} t - 24hr int
*   @returns {String}
*/
function epochToDate (e) {
    var d = new Date(0); 
    d.setUTCSeconds(e);

    return `${convertHr(d.getHours())}:${convertMin(d.getMinutes())} ${AM_PM(d.getHours())}`
}
