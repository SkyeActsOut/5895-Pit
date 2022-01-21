var root = document.documentElement;

const LIGHT_THEME = 
    {
        light_one: root.style.getPropertyValue('light_one'),
        light_two: root.style.getPropertyValue('light_two'),
        light_three: root.style.getPropertyValue('light_three'),

        dark_one: root.style.getPropertyValue('dark_one'),
        dark_two: root.style.getPropertyValue('dark_two'),
        dark_three: root.style.getPropertyValue('dark_three'),

        highlight_one: root.style.getPropertyValue('highlight_one'),
        highlight_two: root.style.getPropertyValue('highlight_two')
    }

// CURRENTLY JUST FLIPPING LIGHT THEME
const DARK_THEME = 
    {
        dark_one: '#fcfdff',
        dark_two: '#e3e9ff',
        dark_three: '#b5b0b8',

        light_one: '#18191c',
        light_two: '#0c0d0f',
        light_three: '#8791a3',

        highlight_one: "#66a6de",
        highlight_two: "#0858c2"
    }

var lightTheme = true;

function flipDark () {

    if (lightTheme) {
        root.style.setProperty ('--light-one', DARK_THEME.light_one)
        root.style.setProperty ('--light-two', DARK_THEME.light_two)
        root.style.setProperty ('--light-three', DARK_THEME.light_three)

        root.style.setProperty ('--dark-one', DARK_THEME.dark_one)
        root.style.setProperty ('--dark-two', DARK_THEME.dark_two)
        root.style.setProperty ('--dark-three', DARK_THEME.dark_three)

        root.style.setProperty ('--highlight-one', DARK_THEME.highlight_one)
        root.style.setProperty ('--highlight-two', DARK_THEME.highlight_two)

    }
    else {
        root.style.setProperty ('--light-one', LIGHT_THEME.light_one)
        root.style.setProperty ('--light-two', LIGHT_THEME.light_two)
        root.style.setProperty ('--light-two', LIGHT_THEME.light_three)

        root.style.setProperty ('--dark-one', LIGHT_THEME.dark_one)
        root.style.setProperty ('--dark-two', LIGHT_THEME.dark_two)
        root.style.setProperty ('--dark-three', LIGHT_THEME.dark_three)

        root.style.setProperty ('--highlight-one', LIGHT_THEME.highlight_one)
        root.style.setProperty ('--highlight-two', LIGHT_THEME.highlight_one)

    }

    lightTheme = !lightTheme;

}