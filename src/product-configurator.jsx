import {updateOptions} from "./redux/actions"
import {selectChosenOptions, selectOptions, selectProduct} from "./redux/selectors"
import {useSelector, useDispatch} from "react-redux"
import {useCallback} from "react"
// import useSelector from "react-redux"
import data from './data.json'
import { useState, Children, cloneElement } from 'react'

// import { Title } from './components'

const Button = ({ label, ...props }) => {
  const dispatch = useDispatch()
  const selectedOptions = useSelector(selectChosenOptions)
  const { type, value } = props
  // const { type, value, selectedOptions } = props
  const isSelected = selectedOptions[type] === value
  const click = () => dispatch(updateOptions({ type, value }))
  return (
    <button {...props} onClick={click}>
      {label}
    </button>
  )
}

const Title = () => {
  const {title} = useSelector(selectProduct)
  return <h1>{title}</h1>
}

const Description = () => {
  const {description} = useSelector(selectProduct)
  return <p>{description}</p>
}

const Summary = () => {
  const product = useSelector(selectProduct)
  return <div>Bunch of summary stuff</div>
}

const Label = ({ label }) => {
  return <p>{label}</p>
}

const Configurator = ({ props, children }) => {
  return (
    <div id="product-configurator">
      {Children.map(children, (child) => cloneElement(child, { ...props }))}
    </div>
  )
}

const Image = () => {
  return <h2>Image</h2>
}

// const Summary = ({ summary }) => <h2>{summary}</h2>

const ProductConfigurator = () => {
  const options = useSelector(selectOptions)
  console.log('options', options);
  return (
    <div id="product-configurator">
      <Title />
      <Description />
      <Image />
      {options.map(({ label, values, type }) => (
        <div className="button-group">
          <Label label={label} />
          {values.map((props) => (
            <Button {...props} type={type} />
          ))}
        </div>
      ))}
      <Summary />
    </div>
  )
}

export default ProductConfigurator
