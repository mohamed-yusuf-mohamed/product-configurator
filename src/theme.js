import { parseHSL } from "./utils";
// Colours are defined in HSL format. https://css-tricks.com/yay-for-hsla

const theme = {
  // configurator: {
  title: {
    colour: "hsl(0, 0%, 12%)",
  },
  description: {
    colour: "hsl(0, 0%, 21%)",
  },
  font: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
  option: {
    button: {
      selected: {
        border: `1px solid hsl(164, 100%, 30%)`,
      },
      unselected: {
        border: "1px solid hsl(0, 0%, 21%)",
      },
      padding: "20px",
      border: {
        radius: "2rem",
      },
    },
  },
};

export default theme;
