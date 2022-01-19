/**
    CORE / UTILITY FUNCTIONS
    Core / Utility functions for working and manipulating data

    @author SKYE KYCHENTHAL
    @author Peddie Robotics
*/

/**
*    @description Loads a bunch of TBA and Spreadsheet data to update our panel
*    @param {String} key - the key for the specific google sheets
*    @param {String} sheet - the specific google sheets spreadsheet
*    @returns {String} url - The URL for the spreadsheet to be loaded through AJAX
*/
function loadCSV (key, sheet) {
    console.log (key)
    var url= `https://docs.google.com/spreadsheets/d/${key}/gviz/tq?tqx=out:csv&sheet=${sheet}`;
    return url;
}

/**
*   @description Shuffles Array
*   @param {Array} array
*   @returns {Array}
*/
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}
