<p align="center">
    <img alt="5895 Brunswick Eruption 2021" src="https://user-images.githubusercontent.com/34521078/150027259-ccdc63c1-2553-4a99-8b22-647bd87bbdf9.jpg" />
    Photo of 5895 @ Brunswick Eruption 2021 by Skye Kychenthal
</p>

# 5895 Pit 

The ~o f f i c i a l~? pit screen for **5895** ([@PeddieRobotics](https://github.com/peddierobotics)) created by Skye Kychenthal '22

This app is currently 5895-specific. Look out for a future template version for other teams!

## Functionality
### Future Features & Trello
In-progress & future features can be found on the [5895-Pit Trello](https://trello.com/b/3Hwtan5P/main-board).

### Current Primary Functionality
* Basic data/match pulling & visualization from TBA & custom scouting spreadsheets
* Organized match structure to see when your team has their next matches
* Scouting data for next match to be used for quals strategy

## Documentation

### Production Notes
1. This is (currently) entirely a front-end application, so a web-server such [http-server](https://www.npmjs.com/package/http-server) or [Apache2](https://httpd.apache.org/) is required to run. 
2. `Config.JSON` is required to run. Example config.JSON [here](https://github.com/SkyMocha/5895-Pit/blob/main/ex_config.json).
3. In `Config.JSON` a TBA Key is required. You can get yours [here](https://www.thebluealliance.com/apidocs).

### File Structure
```
.
├── api                         
│   └── stub                    
│       ├── stub.js             # The main run file for stub API 
│       └── data
│           └── event.json      # Events array containing just Hatboro 2020
│           └── matches.json    # Matches for Hatboro 2020
│   └── bluealliance            # The primamry API file containing STUB & Production APIs
├── src                         
│   ├── core_func.js            # Core & utility functions
│   ├── time_func.js            # Time-related functions
│   ├── team_func.js            # Team-related functions
│   ├── matches.js              # The Matches class which sorts and tracks matches
│   └── main.js                 # The primary JS run-file
├── ex_config.json              # Example config file —> fill & rename to config.json
├── index.html                  # The primary pit screen
├── style.css                   # Stylesheet for primary pit screen
└── README.md
```

## Contributing
UHHHHH. Not right now? 

5895 peeps can look at it, but please let me finish before adding your own touches or forking to [@PeddieRobotics](https://github.com/peddierobotics)

I'll link to an MIT template version for other teams in the future :)