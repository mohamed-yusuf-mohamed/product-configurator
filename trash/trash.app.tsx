// import Summary from "./components/Summary"
// import StyledButton from './components/OptionSelect'
// import { updateSelection } from './redux/actions'
// import {
//   selectChosenOptions,
//   selectOptions,
//   selectProduct,
//   selectAttributes
// } from './redux/selectors'
// import { useSelector, useDispatch } from './redux/hooks'
// import { useCallback, ReactNode, ReactElement } from 'react'
// // import useSelector from "react-redux"
// // import data from './data.json'
// import { useState, Children, cloneElement } from 'react'



// const OptionSelect = ({ type, ...props }: Props.OptionSelect) => {
//   const dispatch = useDispatch()
//   const attributes = useSelector(selectAttributes) as any
  
//   const { value, label } = props
//   const isSelected = (attributes as any)[type].value === value
//   // const isSelected = (attributes as State.Attribute)[type].value === value
//   // console.log('type', type);
//   // console.log('value', value);
//   // console.log('attributes', attributes);
//   const handleClick = () => dispatch(updateSelection({ ...attributes, [type]: { value, label} }))
//   // const handleClick = () => dispatch(updateOptions({ type, value }))
//   return (
//     <StyledButton isSelected={isSelected} onClick={handleClick} {...props}>
//       {label}
//     </StyledButton>
//   )
// }

// const Title = () => {
//   const { title } = useSelector(selectProduct)
//   return (
//     <div className="title">
//       <h1>{title}</h1>
//     </div>
//   )
// }

// const Description = () => {
//   const { description } = useSelector(selectProduct)
//   return <div className="description">{description}</div>
// }






// const Label = (props: Props.Label) => {
//   const { label } = props
//   return <p>{label}</p>
// }

// // const Configurator = ({ props, children }) => {
// //   return (
// //     <div id="product-configurator">
// //       {Children.map(children, (child) => cloneElement(child, { ...props }))}
// //     </div>
// //   )
// // }

// const Image = () => {
//   const { image } = useSelector(selectProduct)
//   return (
//     <div className="image">
//       <img src={image} />
//     </div>
//   )
// }

// // const Summary = ({ summary }) => <h2>{summary}</h2>

// // const Title = () =>

// const Body = ({ children }: { children: ReactElement[] }) => (
//   <div className="body">
//     {Children.map(children, (child: ReactElement) => cloneElement(child))}
//   </div>
// )

// const ProductConfigurator = (props: Props.ProductConfigurator) => {
//   console.log('props.options', props.options);
//   const { className } = props
//   const options = useSelector(selectOptions)
//   return (
//     <div id="product-configurator" className={className}>
//       <Title />
//       <Body>
//         <Image />
//         <div className="configurator">
//           <Description />
//           {(Object.values(options) as Data.Options[]).map((data: Data.Options) => {
//             const { label, values, type } = data
//             return (
//               <div className="button-group">
//                 <Label label={label} />
//                 {(Object.values(values) as Data.Values[]).map((props: Data.Values) => (
//                   <OptionSelect {...props} type={type} />
//                 ))}
//               </div>
//             )
//           })}
//           <Summary />
//         </div>
//       </Body>
//     </div>
//   )
// }

// interface Values {
//   value: string
//   label: string
// }

// declare namespace State {
//   export interface Attribute {}
//   export interface Product {
//     attribute: {
//       [key: string]: Attribute
//     }
//   }
// }

// declare namespace Data {
//   export interface Options {
//     type: string;
//     label: string;
//     values: Values[]
//   }
//   export interface Values {
//     value: string
//     label: string;
//   }
// }

// declare namespace Props {
//   export interface Summary {
//     className?: string
//   }
//   export interface OptionSelect {
//     value: string
//     label: string
//     type: string
//   }
//   export interface Label {
//     label: string
//   }
//   export interface ProductConfigurator {
//     className?: string
//     options: any
//   }
// }

// // interface Props {

// // }

// // interface OptionSelect {
// //   value: string
// //   label: string
// //   type: string
// // }

// // interface Label {
// //   label: string
// // }

// export default ProductConfigurator
