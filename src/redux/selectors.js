import {formatPrice} from "./utils"
import {createSelector} from "reselect"

export const selectOptions = (state) => state.options

export const selectProduct = (state) => state.selected

export const selectSummary = createSelector(selectProduct, (product) => {
  const {attributes, price} = product
  return {
    ...attributes,
    price: formatPrice(price)
  }
})

export const selectAttributes = createSelector(selectProduct, (product) => {
  return Object.values(product.attributes).filter((attribute) => attribute.selectable === true).reduce((prev, attribute) => ({
    ...prev,
    [attribute.type]: attribute
  }), {})
})

export const selectDescription = createSelector(selectProduct, product => product.description)
export const selectTitle = createSelector(selectProduct, product => product.title)
export const selectImage = createSelector(selectProduct, product => product.image)