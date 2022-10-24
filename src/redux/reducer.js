const initialState = {
  // title: "",
  // description: "",
  // image: "",
  products: {
    "1": {
      id: "1",
      title: "Hardcover Notebook",
      description: "",
      image: "",
      "cover-colour": "red",
      "paper-type": "dotted",
      "page-count": 170,
    },
    "2": {

    },
    "3": {

    },
    "4": {

    }
    
  },
  options: [
    {
      type: 'cover-colour',
      label: 'Choose your colour',
      values: [
        {
          value: 'blue',
          label: 'Ocean',
        },
        {
          value: 'red',
          label: 'Sunset',
        },
      ],
    },
    {
      type: 'paper-type',
      label: 'Choose your page layout',
      values: [
        {
          value: 'dotted',
          label: 'Dotted',
        },
        {
          value: 'lined',
          label: 'Lined',
        },
      ],
    },
  ],
  chosenOptions: {
    "cover-colour": "red",
    "page-type": "dotted"
  },
  // selectedProduct: {
  //     label: "Hardcover Notebook",
  //     "cover-colour": "red",
  //     "paper-type": "dotted",
  //     "page-count": 170
  // },
  
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "UPDATE_OPTIONS": 
      return {
        ...state,
        selectedOptions: action.data.options,
      }
    // case "SELECT_PRODUCT":
    //   return {
    //     ...state,
    //     selectedProduct: action.data.selectedProduct
    //   }
    default:
      return state
  }
}
export default reducer