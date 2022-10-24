import theme from "./theme"
import {ThemeProvider} from "styled-components"
import store from './redux/store';
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ProductConfigurator from './product-configurator.styled'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProductConfigurator />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
