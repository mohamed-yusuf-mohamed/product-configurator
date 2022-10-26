import data from "./mocks/products.json"
export const getProducts = () => new Promise((resolve, reject) => resolve(data))

const api = {
  getProducts
}

export default api