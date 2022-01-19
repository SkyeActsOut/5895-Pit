/**
    TEAM FUNCTIONS
    All functions related to getting/working with teams or team data

    @author SKYE KYCHENTHAL
    @author Peddie Robotics
*/

/**
*   @description Makes a team s t r o n g
*   @param {String} sheet - the specific google sheets spreadsheet
*   @returns bolded text
*/
function strong (t, user_team) {
    if (t == user_team)
        return `<strong>${t}</strong>`;
    return t;
}

/**
*   @description  Gets a specific team based on the red or blue variable from TBA
*   @param {Array} br - The blue or red team ie b/r
*   @param {Int} i - the index of the team on blue or red
*   @returns {String} the team IE. 5895
*/
function getTeam (br, i) { // Gets a team based on the blue/red var — bolds 5895 so it's v i s i b l e
    let t = br.team_keys[i].slice(3);
    return t;
}

/**
*   @description Is the team in this match?
*   @param {Array} blue
*   @param {Array} red
*   @param {String} user_team - The team currently using this application
*   @returns {Bool}
*/
function inMatch(blue, red, user_team) {
    for (let i = 0; i < 3; i++)
        if (getTeam(blue, i) == user_team)
            return true;
    for (let i = 0; i < 3; i++)
        if (getTeam(red, i) == user_team)
            return true;
    return false;
}
/**
*   @description Who won this match? Return a div with the winner color.
*   @param {Object} m - The specific match
*   @returns {Div}
*/
function getWinner (m){ // Gets a matches winning team or none if it hasn't happened... I think 
    let win = m.winning_alliance;

    // Win / Loss
    if (win == 'blue')
        return `<div class='blue'>[X]</div>`
    else if (win=='red')
        return `<div class='red'>[X]</div>`

    // CHECKS FOR TIES
    // Comment out to purposefully break an event to check how curr & next events are functioning
    else if (m.alliances.blue.score == m.alliances.red.score) 
        return `<div class='red'>[T]</div>`
    
    return false
}
/**
*   @description Gets a teams OPR from our data
*   @param {Array} OPR - the OPR spreadsheet as a CSV
*   @param {String} team - IE. 5895
*   @returns {Int}
*/
function getOPR (opr, team) { // Gets a teams OPR based on the CSV array for OPR
    let o = '??';
    opr.forEach(t => {
        // console.log (`${t[0]}  ${team}`)
        if (t[0] == team){
            o = t[3];
        }
    })
    return o;
}
/**
*   @description Loads the OBJECTIVE scouting data div columns for each category
*   @param {Array} scout - the Souting spreadsheet as a CSV
*   @param {String} team - IE. 5895
*   @returns {Div}
*/
function loadScoutData (scout, team) {
    let o = `<span>--</span><span>--</span><span>--</span><span>--</span><span>--</span>`;
    scout.forEach(t => {
        if (t[0] == team){
            o = `
                    <span>${t[10]}</span><span>${t[11]}</span><span>${t[12]}</span><span>${t[14]}</span><span>${t[16]}</span>
                `
        }
    })
    return o;
}
/**
*   @description Loads the SUBJECTIVE scouting data div columns for each category
*   @param {Array} scout_char - the Subjective Souting charachteristcs spreadsheet as a CSV
*   @param {String} team - IE. 5895
*   @returns {Div}
*/
function loadSubjectiveData (scout_char, team) {
    let o = ``;
    scout_char.forEach(t => {
        // console.log (t)
        if (t[0] == team){
            o = `
                    <div class='subj_line'>
                        <div class="one">Climb D1 / D2:</div>
                        <div class="two">${t[10]}&nbsp;&nbsp;<strong>/</strong>&nbsp;&nbsp;${t[11]}</div>
                    </div>
                    <div class='subj_line'>
                        <div class="one">Shooting:</div>
                        <div class="two">${t[12]}</div>
                    </div>
                    <div class='subj_line'>
                        <div class="one">Shooting Loc.:</div>
                        <div class="two">${t[13]}</div>
                    </div>
                    <div class='subj_line'>
                        <div class="one">Notes:</div>
                        <div class="two">${t[15]}</div>
                    </div>
                `
        }
    })
    return o;
}

/**
*   @description Expands the competition level
*   @param {String} t - shortened match name
*   @returns {String}
*/
function compLevelExpan (t) {
    switch (t) {
        case "qm": return "Quals";
        case "qf": return "Quart-Finals";
        case "sf": return "Semi-Finals";
        case "f": return "Finals";
        default: 
            return "??"
    }
}

/**
*   @description Returns a div element for each individual team that needs to be scouted
*   @param {Array} scout - scouting CSV array
*   @param {Array} scout_char - scouting characteristics CSV array
*   @param {String} team - IE. 5895
*   @returns {Div}
*/
function dataDiv (scout, scout_char, team, user_team) {
    return `
        <div class="scout_team"><span class="blue">${strong(team, user_team)}</span> <span class="data">${loadScoutData(scout, team)}</span></div>
        <div class="subjective">${loadSubjectiveData(scout_char, team)}</div>
    `
}

/**
*   @description Gets the OPR Div to append to the string
*   @param {Array} opr - OPR CSV array
*   @param {String} team - IE. 5895
*   @param {String} user_team - The team currently running this application
*   @returns {Div}
*/
function teamDiv (opr, team, user_team) {
    return `
        <div class='team'>${strong(team, user_team)} (${getOPR (opr, team)})</div>
    `
}