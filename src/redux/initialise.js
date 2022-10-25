import {initialiseData} from "./actions"
import {store} from "./store"
import api from "../api"
import {generateProducts, generateOptions} from "./initialise/generators"
const initialise = async () => {
  const data = await api.getProducts()
  const products = generateProducts(data)
  const options = generateOptions(data)
  const defaultSelection = products[1]

  store.dispatch(initialiseData({
    products,
    options,
    selected: defaultSelection
  }))
}
export default initialise