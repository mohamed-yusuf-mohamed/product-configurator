import {selectOptions} from "./redux/selectors"
import {connect} from "react-redux"
import ProductConfigurator from "./app"

// TodoList.js

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    image: "",
    title: "",
    description: "",
    options: selectOptions(state),
  }
}

export default connect(mapStateToProps)(ProductConfigurator)