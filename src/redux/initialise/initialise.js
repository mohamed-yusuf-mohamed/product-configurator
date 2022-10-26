import {initialiseData} from "../actions"
import {store} from "../store"
import api from "../../api"
import {generateProducts, generateOptions} from "./generators"
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
  
  return store
}
export default initialise