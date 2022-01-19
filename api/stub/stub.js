/**
    STUB SERVER

    @author SKYE KYCHENTHAL
    @author Peddie Robotics
*/

const express = require('express') // express.JS library
const app = express()
const port = 3000 // API Port

const path = require('path');
const base_path = __dirname.split('/').slice(0, -2).join('/')
const Matches = require(`${base_path}/src/matches.js`)

delete path, base_path;

const events = require ('./data/event.json') // The Hatboro 2020 Event
const matches_raw = require ('./data/matches.json')
var matches = new Matches ( matches_raw ) // The matches class
matches.sort();

delete matches_raw;

var match_index = 0; // The currently running match — increases every few seconds to match stub data
var completed_matches = [] // The currently completed matches
var non_completed = []

matches.getAll().forEach (m => {
    non_completed.push(clearMatch(m))
})

var print_matches = []

/** 
 * @description every x seconds adds another match to the stub match stream
 */
setInterval(() => {
    
    completed_matches.push(matches.getAll()[match_index])
    non_completed = non_completed.slice (1)

    match_index += 1

    print_matches = completed_matches.concat(non_completed)

    console.log (`${completed_matches.length}    ${non_completed.length}`)

}, 2 * 1000); // Arbitrary time between fake matches

const base = '/api/2022/'

/** 
 * @description returns a cleared match to simulate a non-completed match
 * @param {object} match the match object
 * @returns {object} 
 */
function clearMatch (match) {
    return {
        "actual_time": match.actual_time,
        "alliances": {
            "blue": match.alliances.blue,
            "red": match.alliances.red
        },
        "comp_level": match.comp_level,
        "event_key": "2020pahat",
        "key": "2020pahat_f1m1",
        "match_number": match.match_number,
        "post_result_time": '',
        "predicted_time": match.predicted_time,
        "score_breakdown": {
            "blue": {
                
            },
            "red": {
            }
        },
        "set_number": match.set_number,
        "time": '',
        "videos": match.videos,
        "winning_alliance": ""
    }
}

/** 
 * @description status endpoint
 */
app.get(`${base}status`, (req, res) => {
    console.log ("Status checked")

    // CORS Headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send (
        "OK!"
    )
})

/** 
 * @description Scrolls through all events
 */
events.forEach (e => { 
    
    /** 
     * @description Individual event endpoint
     */
    app.get(`${base}event/${e.key}`, (req, res) => {

        // CORS Headers
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.send (
            e
        )
    })

    /** 
     * @description All matches for individual event
     */
    app.get(`${base}event/${e.key}/matches`, (req, res) => {

        // CORS Headers
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
        res.json (print_matches)
    
    })

})

// Run express app
app.listen(port, () => {
    console.log(`STUB API Running On http://localhost:${port}`)
})