const Title = (props: Props.Title) => {
  const { title } = props
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  )
}
export default Title