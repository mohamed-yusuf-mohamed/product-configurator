import {selectOptions} from "../../redux/selectors"
import connect from "redux"
import ProductConfigurator from "./"

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