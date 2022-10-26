// import {updateSelection} from "./redux/actions"
import {
  selectAttributes,
  selectImage,
  selectTitle,
  selectOptions,
  selectDescription,
  selectSummary
} from "./redux/selectors"
import { connect } from "react-redux"
import ProductConfigurator from "./app.connected"

// TodoList.js

// function mapDispatchToProps(dispatch) {
//   const attributes = selectAttributes(state)
//   const handleOptionSelect = () => dispatch(updateSelection({ ...attributes, [type]: { value, label} }))
//   return {
//     handleOptionSelect
//   }
// }

function mapStateToProps(state, ownProps) {
  // const attributes = selectAttributes(state)
  // const selectedOption = attributes[type].value
  return {
    ...ownProps,
    image: selectImage(state),
    title: selectTitle(state),
    description: selectDescription(state),
    options: selectOptions(state),
    attributes: selectAttributes(state),
    summary: selectSummary(state)
    // selectedOption
  }
}

export default connect(mapStateToProps)(ProductConfigurator)
// export default connect(mapStateToProps, mapDispatchToProps)(ProductConfigurator)
