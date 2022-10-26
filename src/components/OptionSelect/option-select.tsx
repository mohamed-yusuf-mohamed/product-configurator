import {updateSelection} from "../../redux/actions"
import {useCallback} from "react"
import {useDispatch} from "../../redux/hooks"
import styled from "styled-components"

interface ButtonProps {
  isSelected: boolean
}

const StyledButton = styled.button<ButtonProps>`
  all: unset;
  border: ${({ isSelected, theme }) =>
    isSelected
      ? theme.option.button.selected.border
      : theme.option.button.unselected.border};
  padding: ${({ theme }) => theme.option.button.padding};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.option.button.border.radius};
`

const OptionSelect = ({ type, ...props }: Props.OptionSelect) => {
  const dispatch = useDispatch()
  const { value, label, attributes } = props
  console.log('attributes', attributes);
  const isSelected = attributes[type].value === value
  const handleOptionSelect = useCallback(
    () =>
      dispatch(updateSelection({ ...attributes, [type]: { value, label } })),
    [attributes, type, value, label, dispatch]
  )
  return (
    <StyledButton
      data-testid="option-select"
      isSelected={isSelected}
      onClick={handleOptionSelect}
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default OptionSelect
