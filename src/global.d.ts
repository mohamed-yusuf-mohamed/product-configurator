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
  interface Summary {
    className?: string
  }
  
  declare namespace Props {
    export interface Summary {
      className?: string
    }
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