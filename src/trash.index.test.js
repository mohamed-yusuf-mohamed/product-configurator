import {fetchData, handleInput, reset, load} from "./actions"
import fetch from "jest-fetch-mock"
import initialState from "./mocks/state.json"
import App from "./index"
// import {store} from "./store"
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()


import theme from "./theme"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom/client"
import initialiseData from "./redux/initialise"
import ProductConfigurator from "./app"

initialiseData().then((store) =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ProductConfigurator />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )
)




// initialise().then((store) => {

  describe("app", async () => {


    const store = await initialiseData()

    const {getByTestId} = render(<App />)
    
    // const {getByTestId} = render(
    //   ReactDOM.createRoot(document.getElementById("root")).render(
    //   <React.StrictMode>
    //     <Provider store={store}>
    //       <ThemeProvider theme={theme}>
    //         <ProductConfigurator />
    //       </ThemeProvider>
    //     </Provider>
    //   </React.StrictMode>
    // ) 

    const component = getByTestId("root")

    it("renders: matches snapshot", () => {
      expect(component).toMatchSnapshot()
    })
    
  })


  