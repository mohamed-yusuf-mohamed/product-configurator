// interface options {
  
// }
export const updateOptions = (options) => ({
    type: "UPDATE_OPTIONS",
    data: options
})
  

// const selectProduct = () => (dispatch, getState) => {
//   const {products, selectedOptions} = getState()


//     const select = () => {
//       const hasOptions = (product) => {
//         for(const type in selectedOptions) {
//           if(!product[type] === selectedOptions[type]) return false
//         }
//       }
//       for(const id in products) {
//         if(!hasOptions(product[id])) continue
//         return products[id]
//       }
//     }
//     const selectedProduct = select(products, selectedOptions)

      
      
//   return { type: "SELECT_PRODUCT", data: {selectedProduct} }
// }

// const actions = {
// //  selectProduct,
//  updateOptions 
// }
// export default actions