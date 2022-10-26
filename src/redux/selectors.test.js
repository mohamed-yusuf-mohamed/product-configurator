// import {fetchData, handleInput, reset, load} from "./actions"
// import fetch from "jest-fetch-mock"
import state from "./mocks/state.json"
import summary from "./mocks/summary.json"
import attributes from "./mocks/attributes.json"
// import options from "./mocks/state.json"
// import {store} from "./store"
// import { enableFetchMocks } from 'jest-fetch-mock'
// enableFetchMocks()


// initialise().then((store) => {

  describe("selectors", () => {

    // await store.dispatch(initialise(initialState))

    it("selectOptions", () => {
      const result = selectOptions(state)
      expect(result).toEqual(state.options)
    })
    
    it("selectProduct", () => {
      const result = selectProduct(state)
      expect(result).toEqual(state.selected)
    })
    

    it("selectSummary", () => {
      const result = selectSummary(state)
      expect(result).toEqual(summary)
    })

    it("selectAttributes", () => {
      const result = selectAttributes(state)
      expect(result).toEqual(attributes)
    })
    
  })