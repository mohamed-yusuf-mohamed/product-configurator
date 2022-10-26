import ProductConfigurator from "./app"
import styled from "styled-components"

const StyledProductConfigurator = styled(ProductConfigurator)`
  ${({ theme }) => `@import url(${theme.font})`};
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2rem;

  & div {
    margin-bottom: 2rem;
  }

  & .title {
    margin-left: 40%;
    color: ${({ theme }) => theme.title.colour};
    & h1 {
      all: unset;
      font-weight: regular;
      font-size: 1.7rem;
    }
  }

  & .body {
    display: flex;
    & .image {
      flex: 0 0 40%;
    }
    & .description {
      color: ${({ theme }) => theme.description.colour};
    }
  }

  & .image img {
    width: 90%;
  }

  & .button-group button {
    margin-right: 1.5rem;
    width: 35%;
  }
`
export default StyledProductConfigurator
