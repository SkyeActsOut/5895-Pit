# 5895 Pit 

The ~o f f i c i a l~? pit screen for 5895 (@PeddieRobotics) created by Skye Kychenthal '22

## Documentation

### Production Notes
1. This is entirely a front-end application, so a web-server such [http-server](https://www.npmjs.com/package/http-server) or Apache2 is required to run. 
2. `Config.JSON` is required to run. Currently `Config.JSON` includes: TBA API Token (`TOKEN`), OPR Spreadsheet Key (`OPR_KEY`), Current Event (`EVENT`) & Year (`YEAR`). 

### General Notes
1. This app is currently so 5895-specific that you'd likely have to re-write most of it to be for other teams. In the future I might create another version thats more of a template, and that has sections for including your own OPR & Scouting Data. But I have to finish this application first.

## TODO & Done
- [x] Basic Data from TBA API (Matches: Predicted Time, Blue/Red Alliance Teams, Winning Team, etc.)
- [x] Basic spread-sheet integration for OPR
- [ ] Make it look good & organize events w/ a focus on quals
- [ ] Make it more clear when we need to be on the field and ready to rumble
- [ ] Include scouting data?
- [ ] Create real-time stub data to verify it works & properly refreshes for actual events
- [ ] Clean up code
- [ ] More I can't think of

## Contributing
UHHHHH. Not right now? 

5895 peeps can look at it, but please let me finish before adding your own touches or forking to @PeddieRobotics

Other teams feel free to look through this code or use it as inspiration to make your own pit screen! :)