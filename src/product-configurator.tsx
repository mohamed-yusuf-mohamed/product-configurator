import StyledButton from './button.styled'
import { updateOptions } from './redux/actions'
import {
  selectChosenOptions,
  selectOptions,
  selectProduct,
} from './redux/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback, ReactNode, ReactElement } from 'react'
// import useSelector from "react-redux"
import data from './data.json'
import { useState, Children, cloneElement } from 'react'

// import { Title } from './components'

// const StyledButton = styled(button)`
//   border: ${({ isSelected, theme }) =>
//     isSelected ? theme.option.selected : theme.option.unselected};
// `

const OptionSelect = ({ type, ...props }: Props.OptionSelect) => {
  const dispatch = useDispatch()
  const selectedOptions = useSelector(selectChosenOptions)
  const { value, label } = props
  const isSelected = selectedOptions[type] === value
  const handleClick = () => dispatch(updateOptions({ type, value }))
  return (
    <StyledButton isSelected={isSelected} onClick={handleClick} {...props}>
      {label}
    </StyledButton>
  )
}

const Title = () => {
  const { title } = useSelector(selectProduct)
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  )
}

const Description = () => {
  const { description } = useSelector(selectProduct)
  return <div className="description">{description}</div>
}

const Summary = () => {
  const product = useSelector(selectProduct)
  return <div>{JSON.stringify(product)}</div>
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

const Image = () => {
  const { image } = useSelector(selectProduct)
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
  const { className } = props
  const options = useSelector(selectOptions)
  return (
    <div id="product-configurator" className={className}>
      <Title />
      <Body>
        <Image />
        <div className="configurator">
          <Description />
          {options.map((data: Data.Options) => {
            const { label, values, type } = data
            return (
              <div className="button-group">
                <Label label={label} />
                {values.map((props: Data.Values) => (
                  <OptionSelect {...props} type={type} />
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

interface Values {
  value: string;
  label: string;
}


declare namespace Data {
  export interface Options {
    type: string;
    label: string;
    values: Values[]
  }
  export interface Values {
    value: string
    label: string;
  }
}

declare namespace Props {
  export interface OptionSelect {
    value: string
    label: string
    type: string
  }
  export interface Label {
    label: string
  }
  export interface ProductConfigurator {
    className?: string
  }
}

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
