import theme from "../../theme"
import { ThemeProvider } from "styled-components"
import React from "react"
import { render } from "@testing-library/react"
import Summary from "./index"
import props from "./mocks/props.json"

describe("summary component", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Summary {...props} />
    </ThemeProvider>
  )
  const component = getByTestId("product-summary")

  it("renders", () => {
    expect(component).toMatchSnapshot()
  })
})
