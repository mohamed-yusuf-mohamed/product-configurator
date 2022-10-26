const Summary = (props: Props.Summary) => {
  const {
    className,
    "page-count": pages,
    "cover-colour": colour,
    "paper-type": layout,
    price,
  } = props
  // n.b. <th className="hide">Values</th> is placed in the document and hidden to fix a cls issue
  return (
    <div className={className} data-testid="product-summary">
      <table>
        <tbody>
          <tr>
            <th>Summary</th>
            <th className="hide">Values</th>
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
        </tbody>
      </table>
    </div>
  )
}

export default Summary
