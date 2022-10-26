const Image = (props: Props.Image) => {
  const { image } = props
  return (
    <div className="image">
      <img src={image} />
    </div>
  )
}
export default Image