import { createSelector } from 'reselect'

export const selectOptions = (state) => state.options
export const selectChosenOptions = (state) => state.chosenOptions
// const 
// memoized to save on compute
export const selectProduct = (state) => {
  const {chosenOptions, products} = state

  // const select = (products, selectedOptions) => {
  const hasOptions = (product) => {
    for (const type in chosenOptions) {
      if (!product[type] === chosenOptions[type]) continue
      return true
    }
  }
  for (const id in products) {
    if (!hasOptions(products[id])) continue
    return products[id]
  }
  // return null
  // }
  // const selectedProduct = select(products, selectedOptions)

  // return selectedProduct
  // return { type: "SELECT_PRODUCT", data: {selectedProduct} }
}

// export default {
//   selectedOptions,
//   product,
//   options

// }
// export default selectors
