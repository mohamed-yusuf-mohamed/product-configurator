import data from './data.json'
import { useState, Children, cloneElement } from 'react'

// import { Title } from './components'

const Button = ({ label, ...props }) => {
  const { type, value } = props
  const click = () => dispatch(selectOption({ type, value }))
  return (
    <button {...props} onClick={click}>
      {label}
    </button>
  )
}

const Label = ({ text }) => <p>{text}</p>

const Configurator = ({ data, children }) => {
  return (
    <div id="product-configurator">
      {Children.map(children, (child) => cloneElement(child, { ...data }))}
    </div>
  )
}

const App = ({ selectables, selectedProduct, selectedOptions }) => {
  const selectedProduct = useSelector(selectProduct)
  // dispatch(selectProduct())
  

  

  // const select = ({ type, value }) => {
  //   // for(const attribute of attributes) {

  //   // }

  //   const check = (attributes) => {
  //     if (!attributes.find((attribute) => attribute.type === type)) return false
  //     if (!attributes.find((attribute) => attribute.value === value))
  //       return false
  //     return true
  //   }
  //   products.filter((product) => {
  //     if (check(product.attributes)) return true
  //   })
  // }

  const handleClick = (e) => {
    // console.log('e', e.target.getAttribute("type"));
    const type = e.target.getAttribute('type')
    const value = e.target.getAttribute('value')
    // const product = select({
    //   type,
    //   value
    // })

    // setProduct(product)
    // setSelected({
    //   ...selected,
    //   [type]: value
    // })
    // setProduct({

    // })
  }

  const isSelected = ({ type, props: { value } }) => {
    // if(selected[type] === value) return true
    // check({value})
    if (!product.attributes.find((attribute) => attribute.type === type))
      return false
    if (!product.attributes.find((attribute) => attribute.value === value))
      return false
    return true
  }

  return (
    <Configurator data={product}>
      {/* <Title />
      <Description />
      <Image /> */}
      {selectables.map(({ label, options, type }) => (
        <div className="button-group">
          <Label text={label} />
          {options.map((props) => (
            <Button
              handleClick={handleClick}
              type={type}
              {...props}
              isSelected={isSelected(type, props)}
            />
          ))}
        </div>
      ))}
    </Configurator>
  )
}

const configurator = ({ data }) => {
  // const [query] = useQuery()
  // const state = {
  //   "cover-colour": "blue",
  //   "paper-type": "dotted"
  // }
  // const summary = () => {
  //   const query = {
  // 		"id": "2",
  // 		"product-label": "Hardcover Notebook",
  // 		"product-id": "hardcover-notebook",
  // 		"attributes": [
  // 			{
  // 				"id": "cc1",
  // 				"type": "cover-colour",
  // 				"value": "red",
  // 				"label": "Sunset",
  // 				"selectable": true
  // 			},
  // 			{
  // 				"id": "pt1",
  // 				"type": "paper-type",
  // 				"value": "lined",
  // 				"label": "Lined",
  // 				"selectable": true
  // 			},
  // 			{
  // 				"id": "pc1",
  // 				"type": "page-count",
  // 				"value": 176,
  // 				"label": "176",
  // 				"selectable": false
  // 			}
  // 		],
  // 		"price": 15
  // 	}
  //   const data = {
  //     pages: attributes.find((element) => element.type === "page-count"),
  //     colour: "",
  //     layout: "",
  //     price: "",
  //   }
  // }
  // const state = {
  //   title: "",
  //   description: "",
  //   selectables: [
  //     {
  //       type: "cover-colour",
  //       label: "Choose your colour",
  //       options: [
  //         {
  //           value: "blue",
  //           label: "Ocean"
  //         },
  //         {
  //           value: "red",
  //           label: "Sunset"
  //         }
  //       ]
  //     },
  //     {
  //       type: "paper-type",
  //       label: "Choose your page layout",
  //       options: [
  //         {
  //           value: "dotted",
  //           label: "Dotted"
  //         },
  //         {
  //           value: "lined",
  //           label: "Lined"
  //         }
  //       ]
  //     }
  //   ]
  // };
  // const handleClick = e => {
  //   set({
  //     ...state,
  //     button: map[e.eventTarget.innerText]
  //   });
  // };
}
export default App
