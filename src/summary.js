import { selectOptions } from "./redux/selectors"
import { selectProduct } from "./redux/selectors"
import { useSelector } from "react-redux"
const Summary = ({ className }: Props.Summary) => {
  const {
    "page-count": pages,
    "cover-colour": colourValue,
    "paper-type": layoutValue,
    price,
  } = useSelector(selectProduct)
  const options = useSelector(selectOptions)
  const colour = options["cover-colour"].values[colourValue].label
  const layout = options["paper-type"].values[layoutValue].label
  return (
    <div className={className}>
      <table>
        <tr>
          <th>Summary</th>
          <th className="hide">Values</th> {/* to fix cls */}
        </tr>
        <tr>
          <td>Pages</td>
          <td>{pages}</td>
        </tr>
        <tr>
          <td>Colour</td>
          <td>{colour}</td>
        </tr>
        <tr>
          <td>Layout</td>
          <td>{layout}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>{price}</td>
        </tr>
      </table>
    </div>
  )
}

export default Summary
