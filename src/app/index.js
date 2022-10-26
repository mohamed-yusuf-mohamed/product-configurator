import theme from "../theme"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import React from "react"
// import ReactDOM from "react-dom/client"
// import initialiseData from "../redux/initialise"
import ProductConfigurator from "./app.connect"

// initialiseData().then((store) =>
// ReactDOM.createRoot(document.getElementById("root")).render(
const App = ({store}) => (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProductConfigurator />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
// )
// )

export default App
// export { default } from "./app.connect"
