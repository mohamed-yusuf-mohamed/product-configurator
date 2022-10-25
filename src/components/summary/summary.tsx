import { selectOptions, selectSummary } from "../../redux/selectors"
import { selectProduct } from "../../redux/selectors"
import { useSelector } from "react-redux"
const Summary = (props: Props.Summary) => {
  const {className} = props
// const Summary = ({ className }: Props.Summary) => {
  const {'page-count': pages, 'cover-colour': colour, 'paper-type': layout, price} = useSelector(selectSummary)
  // const {pages, colour, layout, price} = useSelector(selectSummary)
  // const summary = useSelector(summary)
  // const {
  //   "page-count": pages,
  //   "cover-colour": colourValue,
  //   "paper-type": layoutValue,
  //   price,
  // } = useSelector(selectProduct)
  // const options = useSelector(selectOptions)
  // const colour = options["cover-colour"].values[colourValue].label
  // const layout = options["paper-type"].values[layoutValue].label
  return (
    <div className={className}>
      <table>
        <tr>
          <th>Summary</th>
          <th className="hide">Values</th> {/* to fix cls */}
        </tr>
        {/* {Object.values(summary).map((item) => (
          
        ))} */}
        <tr>
          <td>Pages</td>
          <td>{pages.value}</td>
        </tr>
        <tr>
          <td>Colour</td>
          <td>{colour.label}</td>
        </tr>
        <tr>
          <td>Layout</td>
          <td>{layout.label}</td>
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
