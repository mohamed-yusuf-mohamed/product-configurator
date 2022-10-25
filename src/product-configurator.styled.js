import ProductConfigurator from "./product-configurator"
import styled from "styled-components"
const StyledProductConfigurator = styled(ProductConfigurator)`
${({theme}) => `@import url(${theme.font})`};
font-family: 'Roboto', sans-serif;
display: flex;
flex-direction: column;
width: 80%;
padding: 2rem;

& div {
  margin-bottom: 2rem;
}

& .title {
  margin-left: 40%;
  color: ${({theme}) => theme.title.colour};
  & h1 {
    margin: 0;
  }
}

& .body {
  display: flex;
  & .image {
    flex: 0 0 40%;
  }
  & .description {
    color: ${({theme}) => theme.description.colour};
  }
}

& .image img {
  width: 90%;
}

& .button-group button {
  margin-right: 1.5rem;
  width: 35%;
}



& .body > div {
  // padding: 20px;
}


// display: grid;
// grid-template-columns: auto auto;
// gap: 10px;
// background-color: #2196F3;
// padding: 10px;
`
export default StyledProductConfigurator