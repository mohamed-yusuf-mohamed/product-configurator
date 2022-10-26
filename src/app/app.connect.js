import {
  selectAttributes,
  selectImage,
  selectTitle,
  selectOptions,
  selectDescription,
  selectSummary
} from "../redux/selectors"
import { connect } from "react-redux"
import ProductConfigurator from "./app.styled"

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    image: selectImage(state),
    title: selectTitle(state),
    description: selectDescription(state),
    options: selectOptions(state),
    attributes: selectAttributes(state),
    summary: selectSummary(state)
  }
}

export default connect(mapStateToProps)(ProductConfigurator)
