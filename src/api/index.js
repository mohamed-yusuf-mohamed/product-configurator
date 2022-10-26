import data from "./mocks/products.json"
export const getProducts = () => new Promise((resolve) => resolve(data))

const api = {
  getProducts
}

export default api