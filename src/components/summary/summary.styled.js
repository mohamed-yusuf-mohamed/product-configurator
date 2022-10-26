import Summary from "./summary"
import styled from "styled-components"
const StyledSummary = styled(Summary)`
  font-family: sans-serif;

  & .hide {
    visibility: hidden;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    text-align: left;
    padding: ${({ theme }) => theme.summary.table.cell.padding};
  }

  tr {
    border-bottom: ${({ theme }) => theme.summary.table.border};
  }

  & th {
    font-weight: unset;
    font-size: 1.2rem;
  }
`
export default StyledSummary
