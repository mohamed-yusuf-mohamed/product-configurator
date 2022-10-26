import ReactDOM from "react-dom/client"
import initialiseState from "./redux/initialise"
import App from "./app"

initialiseState().then((store) =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App store={store} />
  )
)
