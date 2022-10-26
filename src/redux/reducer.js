const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALISE": {
      return action.payload
    }
    case "UPDATE_SELECTION": {
      return {
        ...state,
        selected: action.payload,
      }
    }
    default:
      return state
  }
}
export default reducer
