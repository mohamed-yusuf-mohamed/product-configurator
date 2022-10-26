// import { selectOptions, selectSummary } from "../../redux/selectors"
// import { selectProduct } from "../../redux/selectors"
// import { useSelector } from "react-redux"
const Summary = (props: Props.Summary) => {
  console.log('props', props);
  // const {className} = props
  const {className, 'page-count': pages, 'cover-colour': colour, 'paper-type': layout, price} = props
  // const {'page-count': pages, 'cover-colour': colour, 'paper-type': layout, price} = useSelector(selectSummary)
  return (
    <div className={className} data-testid="product-summary">
      <table>
        <tr>
          <th>Summary</th>
          <th className="hide">Values</th> {/* to fix cls */}
        </tr>
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
