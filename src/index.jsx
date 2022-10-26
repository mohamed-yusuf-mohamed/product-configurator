// import theme from "./theme"
// import { ThemeProvider } from "styled-components"
// import { Provider } from "react-redux"
// import React from "react"
import ReactDOM from "react-dom/client"
import initialiseState from "./redux/initialise"
import App from "./app"

initialiseState().then((store) =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    // <App />
    <App store={store} />
  )
)
// initialiseData().then((store) =>
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
//           <ProductConfigurator />
//         </ThemeProvider>
//       </Provider>
//     </React.StrictMode>
//   )
// )
