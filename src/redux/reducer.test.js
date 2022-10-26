import { updateSelection, initialiseState } from "./actions"
import initialState from "./mocks/state.json"
import { store } from "./store"

describe("reducer", () => {
  it("initialise", async () => {
    await store.dispatch(initialiseState(initialState))
    expect(store.getState()).toEqual(initialState)
  })

  it("updateSelection", async () => {
    const attributes = {
      "cover-colour": {
        id: "cc1",
        type: "cover-colour",
        value: "red",
        label: "Sunset",
        selectable: true,
      },
      "paper-type": {
        id: "pt1",
        type: "paper-type",
        value: "dotted",
        label: "Dotted",
        selectable: true,
      },
    }
    const type = "cover-colour"
    const value = "blue"
    const label = "Ocean"
    const options = { ...attributes, [type]: { value, label } }
    await store.dispatch(updateSelection(options))
    expect(store.getState().selected).toEqual({
      id: "3",
      title: "MOO Hardcover Notebook",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis justo eget augue mattis volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin lectus diam, lobortis ut commodo in, accumsan non orci. Quisque ut tortor ut ligula volutpat imperdiet a eu mauris. Nulla ullamcorper nunc est, vitae ornare tellus pulvinar efficitur. Fusce justo neque, dapibus in gravida nec, eleifend sed velit. Integer vehicula sodales felis, lacinia pretium nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vitae malesuada nibh. Cras ultrices libero feugiat ullamcorper posuere. Maecenas elementum quam non dui vestibulum, ut tempus augue facilisis. Etiam non ipsum vitae purus eleifend egestas ac blandit turpis. Fusce mi massa, interdum sed mi et, malesuada ultricies diam.",
      image: "./moo-product-image.jpeg",
      price: 17,
      attributes: {
        "cover-colour": {
          id: "cc1",
          type: "cover-colour",
          value: "blue",
          label: "Ocean",
          selectable: true,
        },
        "paper-type": {
          id: "pt1",
          type: "paper-type",
          value: "dotted",
          label: "Dotted",
          selectable: true,
        },
        "page-count": {
          id: "pc1",
          type: "page-count",
          value: 170,
          label: "170",
          selectable: false,
        },
      },
    })
  })
})
