import { render } from "@testing-library/react"
import initialise from "../redux/initialise"
import App from "./index"

describe("app", () => {
  it("renders: matches snapshot", () => {
    initialise().then((store) => {
      const { getByTestId } = render(<App store={store} />)
      const component = getByTestId("product-configurator")

      expect(component).toMatchSnapshot()
    })
  })
})
