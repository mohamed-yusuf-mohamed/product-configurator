import Button from "../Button"
import { updateSelection } from "../../redux/actions"
import { useCallback } from "react"
import { useDispatch } from "../../redux/hooks"

const OptionSelect = ({ type, ...props }: Props.OptionSelect) => {
  const dispatch = useDispatch()
  const { value, label, attributes } = props
  const isSelected = attributes[type].value === value
  const handleOptionSelect = useCallback(
    () =>
      dispatch(updateSelection({ ...attributes, [type]: { value, label } })),
    [attributes, type, value, label, dispatch]
  )
  return (
      <Button
        data-testid="option-button"
        isSelected={isSelected}
        onClick={handleOptionSelect}
      >
        {label}
      </Button>
  )
}

export default OptionSelect
