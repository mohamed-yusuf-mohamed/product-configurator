import { render} from "@testing-library/react"
import OptionSelect from "./index"
import props from "./test.props.json"

describe("option select component", () => {
  const { getByTestId: isSelected } = render(
    <OptionSelect {...props.selected} />
  )

  const { getByTestId: unSelected } = render(
    <OptionSelect {...props.selected} />
  )

  const component = {
    selected: isSelected("option-select"),
    unselected: unSelected("option-select"),
  }

  it("renders: selected", () => {
    expect(component.selected).toMatchSnapshot()
  })

  it("renders: unselected", () => {
    expect(component.unselected).toMatchSnapshot()
  })
})
