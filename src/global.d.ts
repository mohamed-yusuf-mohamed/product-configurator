declare global {
  interface Theme {
    Colour: {
      HSL: {
        hue: number
        sat: number
        light: number
      }
    }
  }
  interface State {
    Product: Product
  }
  interface Product {
    id: string
    title: string
    description: string
    image: string
    "cover-colour": string
    "paper-type": string
    "page-count": number
  }
}
export {}