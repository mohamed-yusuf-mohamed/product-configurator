const Image = (props: Props.Image) => {
  const { image } = props
  return (
    <div className="image">
      <img alt="moo-test-product" src={image} />
    </div>
  )
}
export default Image