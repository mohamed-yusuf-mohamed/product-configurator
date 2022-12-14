import theme from "../../theme"
import { render} from "@testing-library/react"
import Button from "./index"
import {useDispatch} from "../../redux/hooks"
import { ThemeProvider } from "styled-components"


jest.mock("../../redux/hooks", () => ({
  useDispatch: () => {}
}))

describe("button component", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Button data-testid="option-button-selected" isSelected={true} type="cover-colour" />
      <Button data-testid="option-button-unselected" isSelected={false} type="cover-colour" />
    </ThemeProvider>
  )

  const component = {
    selected: getByTestId("option-button-selected"),
    unselected: getByTestId("option-button-unselected"),
  }

  it("renders: selected", () => {
    expect(component.selected).toMatchSnapshot()
  })

  it("renders: unselected", () => {
    expect(component.unselected).toMatchSnapshot()
  })
})
