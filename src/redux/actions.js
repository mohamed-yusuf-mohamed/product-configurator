export const updateSelection =
  (options): Thunk =>
  (dispatch, getState) => {
    const { products } = getState()

    const select = () => {
      const hasOptions = (product) => {
        for (const type in options) {
          if (product.attributes[type].value !== options[type].value) {
            return false
          }
        }
        return true
      }

      for (const id in products) {
        if (!hasOptions(products[id])) continue
        return products[id]
      }
    }

    const product = select()

    dispatch({
      type: "UPDATE_SELECTION",
      payload: product,
    })
  }

export const initialiseState = (initialState) => ({
  type: "INITIALISE",
  payload: initialState,
})
