import { render, fireEvent } from '@testing-library/react';

// import {fetchData, handleInput, reset, load} from "./actions"
// import fetch from "jest-fetch-mock"
// import initialState from "./mocks/state.json"
import initialise from "../redux/initialise"
import App from "./index"
// import initialise from "../redux/initialise"
// import {store} from "./store"
// import { enableFetchMocks } from 'jest-fetch-mock'
// enableFetchMocks()





describe("app", () => {
  
  
  it("renders: matches snapshot", () => {
    initialise().then((store) => {
      const {getByTestId} = render(<App store={store}/>) 
      const component = getByTestId("product-configurator")
    
      expect(component).toMatchSnapshot()
    })

  })

  })


  