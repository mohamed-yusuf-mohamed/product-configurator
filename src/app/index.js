import theme from "../theme"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import React from "react"
import ProductConfigurator from "./app.connect"

const App = ({store}) => (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProductConfigurator />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

export default App
