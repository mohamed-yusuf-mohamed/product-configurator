import {fetchData, handleInput, reset, load} from "./actions"
import fetch from "jest-fetch-mock"
import initialState from "./mocks/state.json"
import App from "./index"
// import {store} from "./store"
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()


// initialise().then((store) => {

  describe("app", () => {


    const {getByTestId} = render(<App />) 

    const component = getByTestId("product-configurator")

    it("renders: matches snapshot", () => {
      expect(component).toMatchSnapshot()
    })
    
  })


  