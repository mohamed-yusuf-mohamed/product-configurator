export const parseHSL = ({ hue, sat, light }) => {
  // const {hue, sat, light} = this.colour.highlight
  return `hsl(${hue}, ${sat}%, ${light}%)`
}
