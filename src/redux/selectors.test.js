import state from "./mocks/state.json"
import summary from "./mocks/summary.json"
import {
  selectOptions,
  selectProduct,
  selectSummary,
  selectAttributes,
} from "./selectors"
import attributes from "./mocks/attributes.json"

describe("selectors", () => {
  it("selectOptions", () => {
    const result = selectOptions(state)
    expect(result).toEqual(state.options)
  })

  it("selectProduct", () => {
    const result = selectProduct(state)
    expect(result).toEqual(state.selected)
  })

  it("selectSummary", () => {
    const result = selectSummary(state)
    expect(result).toEqual(summary)
  })

  it("selectAttributes", () => {
    const result = selectAttributes(state)
    expect(result).toEqual(attributes)
  })
})
