import { parseHSL } from './utils'
// Colours are defined in HSL format. https://css-tricks.com/yay-for-hsla

const make = function() {


  return {
    typography: {
      body1: { hue: 0, sat: 0, light: 21 },
      h1: { hue: 0, sat: 0, light: 12 },
    },
    colour: {
      highlight: { hue: 164, sat: 100, light: 30 },
    },
    font: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
    option: {
      button: {
        selected: {
          border: `1px solid ${parseHSL(this.colour.highlight)}`,
        },
        unselected: {
          border: '1px solid black',
        },
        padding: '20px',
        border: {
          radius: "2rem"
        }
      },
    },
  }
}

const theme = make()

export default theme