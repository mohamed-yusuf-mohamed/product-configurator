import {ReactElement} from "react"

declare global {
  // interface Theme {
  //   Colour: {
  //     HSL: {
  //       hue: number
  //       sat: number
  //       light: number
  //     }
  //   }
  // }
  // interface State {
  //   Product: Product
  // }
  // interface Summary {
  //   className?: string
  // }
  
  declare namespace Props {
    export interface Button {
      isSelected: boolean
      children?: string
      onClick: () => void
    }
    
    export interface Image {
      image: string
    }
  
    export interface Description {
      description: string
    }
  
    export interface Title {
      title: string
    }
    export interface OptionSelect {
      value: string
      label: string
      type: keyof AttributeOptions
      attributes: Attributes
    }
    export interface Label {
      label: string
    }
    export interface ProductConfigurator {
      className?: string
      options: Options
      image: string
      title: string
      description: string
      attributes: Attributes
      summary: Summary
    }

    export type Summary = {
      className?: string
      'cover-colour': AttributeItem
      'paper-type': AttributeItem
      'page-count': AttributeItem
      price: number

    }
  }
  
  // interface Product {
  //   id: string
  //   title: string
  //   description: string
  //   image: string
  //   "cover-colour": string
  //   "paper-type": string
  //   "page-count": number
  // }

  type Options = {
    [Property in keyof Attributes]: {
      type: Property
      label: string
      values: OptionItem[]
    }
  }
  
  interface OptionItem {
    value: string
    label: string
  }
  
  // declare namespace State {
  //   export interface Attribute {}
  //   export interface Product {
  //     attribute: {
  //       [key: string]: Attribute
  //     }
  //   }
  // }
  
  
  
  interface AttributeItem {
    id: string
    label: string
    selectable: boolean
    type: string
    value: string
  }
  
  interface AttributeOptions {
    "cover-colour": AttributeItem
    "paper-type": AttributeItem
  }
  
  type Attributes = {
    [Property in keyof AttributeOptions]: AttributeItem
  }
}
export {}