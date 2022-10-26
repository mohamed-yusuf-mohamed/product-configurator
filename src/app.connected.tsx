import Summary from "./components/Summary"
import StyledButton from './components/Button'
import { updateSelection } from './redux/actions'
import {
  selectChosenOptions,
  selectOptions,
  selectProduct,
  selectAttributes
} from './redux/selectors'
import { useSelector, useDispatch } from './redux/hooks'
import { useCallback, ReactNode, ReactElement } from 'react'
// import useSelector from "react-redux"
// import data from './data.json'
import { useState, Children, cloneElement } from 'react'



const OptionSelect = ({ type, ...props }: Props.OptionSelect) => {
  const dispatch = useDispatch()
  // const attributes = useSelector(selectAttributes) as any
  
  const { value, label, attributes } = props
  console.log('attributes', attributes);
  // const isSelected = selectedOption === value
  const isSelected = (attributes as any)[type].value === value
  // const isSelected = (attributes as State.Attribute)[type].value === value
  // console.log('type', type);
  // console.log('value', value);
  // console.log('attributes', attributes);
  const handleOptionSelect = useCallback(() => dispatch(updateSelection({ ...attributes, [type]: { value, label} })), [attributes, type, value, label])
  // const handleClick = () => dispatch(updateOptions({ type, value }))
  return (
    <StyledButton isSelected={isSelected} onClick={handleOptionSelect} {...props}>
      {label}
    </StyledButton>
  )
}

const Title = (props: Props.Title) => {
  const { title } = props
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  )
}

const Description = (props: Props.Description) => {
  const { description } = props
  return <div className="description">{description}</div>
}






const Label = (props: Props.Label) => {
  const { label } = props
  return <p>{label}</p>
}

// const Configurator = ({ props, children }) => {
//   return (
//     <div id="product-configurator">
//       {Children.map(children, (child) => cloneElement(child, { ...props }))}
//     </div>
//   )
// }

const Image = (props: Props.Image) => {
  const { image } = props
  return (
    <div className="image">
      <img src={image} />
    </div>
  )
}

// const Summary = ({ summary }) => <h2>{summary}</h2>

// const Title = () =>

const Body = ({ children }: { children: ReactElement[] }) => (
  <div className="body">
    {Children.map(children, (child: ReactElement) => cloneElement(child))}
  </div>
)

const ProductConfigurator = (props: Props.ProductConfigurator) => {
  // console.log('props.options', props.options);
  const {image, title, description, options, className, attributes} = props
  console.log('options', options);
  // console.log('props', props);
  // const {/ className } = props
  // const options = useSelector(selectOptions)
  // const button = {attributes}
  return (
    <div id="product-configurator" className={className}>
      <Title title={title} />
      <Body>
        <Image image={image}/>
        <div className="configurator">
          <Description description={description} />
          {Object.values(options).map((data) => {
            const { label, values, type } = data
            return (
              <div className="button-group">
                <Label label={label} />
                {Object.values(values).map((props) => (
                  <OptionSelect {...props} attributes={attributes} type={type} />
                ))}
              </div>
            )
          })}
          <Summary />
        </div>
      </Body>
    </div>
  )
}


type Options = {
  [Property in keyof Attributes]: {
    type: keyof Attributes
    label: string
    values: OptionItem[]
  }
}


interface OptionItem {
      value: string
      label: string
}

declare namespace State {
  export interface Attribute {}
  export interface Product {
    attribute: {
      [key: string]: Attribute
    }
  }
}

// declare namespace Data {
//   export interface Options {
//     type: string;
//     label: string;
//     values: OptionItem[]
//   }
//   export interface Values {
//     value: string
//     label: string;
//   }
// }

interface AttributeItem {
  id: string
  label: string
  selectable: boolean
  type: string
  value: string
}

interface Attributes {
  'cover-colour': AttributeItem
  'paper-type': AttributeItem
}

declare namespace Props {

  export interface Image {
    image: string
  }
  
  export interface Description {
    description: string
  }
  
  export interface Title {
    title: string
  }
  export interface Summary {
    className?: string
  }
  export interface OptionSelect {
    value: string
    label: string
    type: string
    attributes: Attributes;
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
  }
}


// {
//   "cover-colour": {
//       "type": "cover-colour",
//       "label": "Choose your colour",
//       "values": {
//           "red": {
//               "value": "red",
//               "label": "Sunset"
//           },
//           "blue": {
//               "value": "blue",
//               "label": "Ocean"
//           }
//       }
//   },
//   "paper-type": {
//       "type": "paper-type",
//       "label": "Choose your page layout",
//       "values": {
//           "dotted": {
//               "value": "dotted",
//               "label": "Dotted"
//           },
//           "lined": {
//               "value": "lined",
//               "label": "Lined"
//           }
//       }
//   }
// }

// interface Props {

// }

// interface OptionSelect {
//   value: string
//   label: string
//   type: string
// }

// interface Label {
//   label: string
// }

export default ProductConfigurator
