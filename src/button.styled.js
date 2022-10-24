import styled from "styled-components"
const StyledButton = styled.button`
all: unset;
border: ${({ isSelected, theme }) =>
isSelected ? theme.option.button.selected.border : theme.option.button.unselected.border};
padding: ${({theme}) => theme.option.button.padding};
cursor: pointer;
border-radius: ${({theme}) => theme.option.button.border.radius};
`
export default StyledButton