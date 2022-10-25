export const formatPrice = (price) => `£${price.toFixed(2)}`

export const parseHSL = function({hue, sat, light}) {
  // const {hue, sat, light} = this.colour.highlight 
  return `hsl(${hue}, ${sat}%, ${light}%)`
}