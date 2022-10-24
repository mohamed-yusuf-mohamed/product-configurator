import ProductConfigurator from "./product-configurator"
import styled from "styled-components"
const StyledProductConfigurator = styled(ProductConfigurator)`
${({theme}) => `@import url(${theme.font})`};
font-family: 'Roboto', sans-serif;
display: flex;
flex-direction: column;


& .title {
  margin-left: 40%;
  color: ${({theme}) => theme.title.colour};
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
  width: 70%;
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