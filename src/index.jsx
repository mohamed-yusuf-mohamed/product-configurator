import theme from "./theme"
import { ThemeProvider } from "styled-components"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom/client"
// import './index.css'
import initialiseData from "./redux/initialise"
import ProductConfigurator from "./app.styled"

// const root = ReactDOM.createRoot(document.getElementById("root"))
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
