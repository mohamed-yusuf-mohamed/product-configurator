import { generateOptions, makeProducts } from "../api/trash.utils"
// import data from "../data.json"

// const products = makeProducts(data)
// const options = generateOptions(data)

// const initialState = {
//   products,
//   options,
//   selected: products[1],
// }

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "INITIALISE": {
      return action.payload
    }
    case "UPDATE_SELECTION": {
      return {
        ...state,
        selected: action.payload,
      }
    }
    default:
      return state
  }
}
export default reducer
