/**
    MAIN.JS
    The run script for the application

    @author SKYE KYCHENTHAL
    @author Peddie Robotics
*/

$.get( "config.json", function( config ) { // loads the config w/ TBA key & spreadsheet key

    const user_team = config.TEAM;
    const TBA = new BlueAlliance (config.TOKEN) // Create object for TBA API

    console.log (`LOADING DATA FOR ${user_team} FROM TBA FOR ${config.EVENT} in ${config.YEAR}`)

    /**
        PRIMARY FUNCTION
        Loads a bunch of TBA and Spreadsheet data to update our panel
        @Param Event (IE. pahat)
        @Param Year (IE. 2020)
    */

    TBA.getEvent (config.EVENT, config.YEAR).then (event => { // Get the event currently running — STUB of Hatboro 2020 since I actually went there

        $(".event_name").html(event.name)
        $(".event_year").html(event.year)

        // Comment out interval for non-production
        // Sets a function that pulls new data every x milliseconds

        // setInterval(() => {

            TBA.getMatchesAtEvent (event).then (matches_raw => { // Get all matches for the event

                $.get(loadCSV(config.OPR_KEY, "pahat_opr")).then ( opr_raw => { // Loads the OPR spreadsheet as raw string data

                    $.get(loadCSV(config.SCOUT_KEY, "AggregateData")).then ( scout_raw => { // Loads the OPR spreadsheet as raw string data
                        
                        $.get(loadCSV(config.SCOUT_KEY, "Characteristics")).then (scout_char_raw => {

                            const scout = $.csv.toArrays(scout_raw) // Scouting data from the AggregateData Spreadsheet

                            const scout_char = $.csv.toArrays(scout_char_raw) // Charachteristics page of the scouting spreadsheet
                            
                            const opr = $.csv.toArrays(opr_raw) // converts the OPR raw string data into an array through a CSV

                            // Clears raw data from memory
                            delete opr_raw, scout_raw, scout_char_raw; // Deletes raw data for memory saving
                            
                            let s = '' // The string that goes in match_list

                            // SORTS MATCHES BY QM --> QF --> SM --> F
                            let _temp1 = [] // All qual matches
                            let _temp2 = [] // All non-qual matches
                            matches_raw.forEach (e => { 
                                if (e.comp_level == "qm")
                                    _temp1.push(e)
                                else
                                    _temp2.push(e)
                            })

                            _temp1 = _temp1.sort(function (a, b) { // sorts qual matches by match number

                                return parseInt(a.match_number) - parseInt(b.match_number);
                            
                            })
                            
                            _temp2 = _temp2.sort (function (a, b) { // sorts elims by time

                                return parseInt(a.predicted_time) - parseInt(b.predicted_time);

                            })

                            const matches = _temp1.concat(_temp2) // A concurrent list of matches

                            delete _temp1, _temp2, matches_raw; // Deletes temp values and raw match data
                            
                            let latest = ''
                            let latest_flag = false

                            let next_match = ''
                            let next_flag = false

                            matches.forEach(match => { // Gets all matches

                                let blue = match.alliances.blue; // gets blue & red alliance teams
                                let red = match.alliances.red;

                                // All teams playing in the game
                                let teams = [
                                    getTeam(blue, 0),
                                    getTeam(blue, 1),
                                    getTeam(blue, 2),

                                    getTeam(red, 0),
                                    getTeam(red, 1),
                                    getTeam(red, 1)
                                ]

                                // Each individual match is added to a string housing the data
                                _s = 
                                    `
                                        <div class='match'>
                                            <div class='match_num'>
                                                ${compLevelExpan(match.comp_level)} : ${match.match_number}
                                            </div>
                                            <div class='time'>
                                                ${epochToDate(match.predicted_time)}
                                            </div>
                                            <div class='teams'>
                                                <div class='blue'>
                                                    ${teamDiv(opr, teams[0], user_team)}
                                                    ${teamDiv(opr, teams[1], user_team)}
                                                    ${teamDiv(opr, teams[2], user_team)}
                                                </div>
                                                <div class='red'>
                                                    ${teamDiv(opr, teams[3], user_team)}
                                                    ${teamDiv(opr, teams[4], user_team)}
                                                    ${teamDiv(opr, teams[5], user_team)}
                                                </div>
                                            </div>
                                    `
                                    
                                // If the match currently being added is the currently running match, then close off the string
                                if (!getWinner(match) && !latest_flag) {
                                    latest_flag = true;
                                    _s += `</div>`
                                    latest = _s;
                                }

                                // If the current match is the next happening match, append scouting data for the match under .next_match
                                if (latest_flag && !next_flag && inMatch(blue, red, user_team)) {
                                    next_flag = true;
                                    _s += `</div>`
                                    next_match = _s;
                                    $(".match_teams").html (
                                        `
                                            <br>

                                            <div class="scout_team">
                                                <span class="blue"></span> <span class="data">
                                                    <span>Quality</span><span>Auto Cells</span><span>Teleop Cells</span><span>Endgame</span><span>Predicted Rank</span>
                                                </span>
                                            </div>

                                            <br>

                                            ${dataDiv(scout, scout_char, teams[0], user_team)}
                                            ${dataDiv(scout, scout_char, teams[1], user_team)}
                                            ${dataDiv(scout, scout_char, teams[2], user_team)}

                                            <br>
                                            ${dataDiv(scout, scout_char, teams[3], user_team)}
                                            ${dataDiv(scout, scout_char, teams[4], user_team)}
                                            ${dataDiv(scout, scout_char, teams[5], user_team)}
                                            
                                            <br>
                                        `
                                    )
                                }

                                // Closes off match if it's already happened in the past
                                else
                                    _s += 
                                    `
                                        <div class='score'> ${getWinner(match)}</div>
                                    </div>
                                    `                                    

                                s+=_s;

                                if (match.match_number == 72)
                                    s+='<hr>'

                            });

                            if (!latest_flag && !next_match){
                                latest = "Add who won later I guess"
                                next_match = "uwu uwu uwu"
                            }

                            $(".curr_match").html(latest);

                            $(".next_match").html(next_match);

                            $(".match_list").html(s);

                        })

                    })

                })
        
            })
            
        // }, 1000 * 10);

    })


});