export const selectOptions = (state) => state.options

export const selectChosenOptions = (state) => state.chosenOptions

export const selectProduct = (state): State.Product => {
  const { chosenOptions, products } = state

  const hasOptions = (product) => {
    for (const type in chosenOptions) {
      if (product[type] !== chosenOptions[type]) return false
    }
    return true
  }
  for (const id in products) {
    if (!hasOptions(products[id])) continue
    return products[id]
  }
}
