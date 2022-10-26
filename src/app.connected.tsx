// import Summary from "./components/Summary"
// import StyledButton from "./components/OptionSelect"
// import { updateSelection } from "./redux/actions"
// import {
//   selectChosenOptions,
//   selectOptions,
//   selectProduct,
//   selectAttributes,
// } from "./redux/selectors"
// import { useDispatch } from "./redux/hooks"
// import { useCallback, ReactNode, ReactElement } from "react"
// import { Children, cloneElement } from "react"
import {
  OptionSelect,
  Title,
  Description,
  Label,
  Image,
  Summary
} from "./components"

const ProductConfigurator = (props: Props.ProductConfigurator) => {
  const { image, title, description, options, className, attributes, summary} = props
  return (
    <div id="product-configurator" className={className}>
      <Title title={title} />
      <div className="body">
        <Image image={image} />
        <div className="configurator">
          <Description description={description} />
          {Object.values(options).map((data) => {
            const { label, values, type } = data
            return (
              <div className="button-group">
                <Label label={label} />
                {Object.values(values).map((props) => (
                  <OptionSelect
                    {...props}
                    attributes={attributes}
                    type={type}
                  />
                ))}
              </div>
            )
          })}
          <Summary {...summary} />
        </div>
      </div>
    </div>
  )
}

export default ProductConfigurator
