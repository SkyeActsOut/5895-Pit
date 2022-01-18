![Brunswick Eruption 2021](https://user-images.githubusercontent.com/34521078/150027259-ccdc63c1-2553-4a99-8b22-647bd87bbdf9.jpg)

# 5895 Pit 

The ~o f f i c i a l~? pit screen for 5895 (@PeddieRobotics) created by Skye Kychenthal '22

## Documentation

### Production Notes
1. This is entirely a front-end application, so a web-server such [http-server](https://www.npmjs.com/package/http-server) or Apache2 is required to run. 
2. `Config.JSON` is required to run. Example config.JSON [here](https://github.com/SkyMocha/5895-Pit/blob/main/ex_config.json).

### General Notes
1. This app is currently so 5895-specific that you'd likely have to re-write most of it to be for other teams. In the future I might create another version thats more of a template, and that has sections for including your own OPR & Scouting Data. But I have to finish this application first.
2. Part of the hopes with this application for 5895 is that the entirety of work would be done on 

## TODO & Done
- [x] Basic Data from TBA API (Matches: Predicted Time, Blue/Red Alliance Teams, Winning Team, etc.)
- [x] Basic spread-sheet integration for OPR & Scoutin Data
- [X] Make it look good & organize events w/ a focus on quals
- [X] Make it more clear when we need to be on the field and ready to rumble
- [X] Section for next-match scouting notes
- [ ] Create pop-ups for individual previous matches showing scouting data & notes
- [ ] Show assigned scouts per match
- [ ] Create real-time stub data to verify it works & properly refreshes for actual events
- [ ] Create basic stub data for 2022 game to verify it works properly for 2022 matches (waiting to finish scouting sheet)
- [ ] Port further compatability to config.JSON for future use?
- [ ] Prettify a bit and limit how many line-breaks occur
- [ ] Clean up & better comment code
- [ ] More I can't think of

## Possible Future Goals
- [ ] Make a simple back-end mobile version on a web server for all team members to use
- [ ] Back-end system for texting scouts few minutes before their match? (would be funny but also useful)

## Contributing
UHHHHH. Not right now? 

5895 peeps can look at it, but please let me finish before adding your own touches or forking to @PeddieRobotics

Other teams feel free to look through this code or use it as inspiration to make your own pit screen! :)
