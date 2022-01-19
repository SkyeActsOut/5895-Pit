/**
    MATCHES.JS
    @description Matches class for sorting & tracking matches

    @author SKYE KYCHENTHAL
    @author Peddie Robotics
*/

class Matches {

    /**
     * @constructor
     * @param {Array} matches_raw - Raw set of matches taken from TBA
     */
    constructor (matches_raw) {

        this.matches_raw = matches_raw
        this.matches = []
        this.sort();
        this.index = 0 // currently running match

    }

    /**
     * @description Sorts the matches variable
     * @returns {VoidFunction}
     */
    sort () {
        // SORTS MATCHES BY QM --> QF --> SM --> F
        let _temp1 = [] // All qual matches
        let _temp2 = [] // All non-qual matches
        this.matches_raw.forEach (e => { 
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

        this.matches = _temp1.concat(_temp2) // A concurrent list of matches
    }

    /**
     * @description gets the current match index
     * @returns {Int} index
     */
    getIndex () {
        return this.index;
    }
    /**
     * @description increases the match index
     * @returns {VoidFunction} 
     */
    inc () {
        this.index+=1;
    }

    /**
     * @description Gets the latest matches index & match object
     * @returns {Object} index + match 
     */
    getLatest () {
        
        for (let i = this.matches.length-1; i >= 0; i--)
        {
            if (this.matches[i].winning_alliance != ''){ 
                return { 
                    "index": i,
                    "match": this.matches[i] 
                };
            }
        }
        
    }

    /**
     * @description updates matches with a new matches_raw and sorts
     * @param {Array} matches_raw Raw set of matches from TBA
     * @returns {VoidFunction}
     */
    update (matches_raw) {

        this.matches_raw = matches_raw;
        this.sort();
        this.inc();

    }

    /**
     * @description Gets all matches in for an event
     * @returns {Array}
     */
    getAll () {
        return this.matches;
    }

    /**
     * @description toString function
     * @todo make simpler
     * @returns {String}
     */
    toString () {
        return this.matches;
    }

}

// If in Node.JS export module
// Ignore if in ES6
if (typeof window === 'undefined')
    module.exports = Matches