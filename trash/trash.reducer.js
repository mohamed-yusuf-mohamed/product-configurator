import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

// lorem.generateWords(1);
// lorem.generateSentences(5);
// lorem.generateParagraphs(7);

const ipsum = lorem.generateParagraphs(1);

const initialState = {
  // title: "",
  // description: "",
  // image: "",
  products: {
    1: {
      id: "1",
      title: "MOO Hardcover Notebook",
      description: ipsum,
      image: "./moo-product-image.jpeg",
      "cover-colour": "blue",
      "paper-type": "dotted",
      "page-count": 170,
      price: 17,
    },
    2: {
      id: "2",
      title: "MOO Hardcover Notebook",
      description: ipsum,
      image: "./moo-product-image.jpeg",
      "cover-colour": "blue",
      "paper-type": "lined",
      "page-count": 170,
      price: 15,
    },
    3: {
      id: "3",
      title: "MOO Hardcover Notebook",
      description: ipsum,
      image: "./moo-product-image.jpeg",
      "cover-colour": "red",
      "paper-type": "dotted",
      "page-count": 170,
      price: 17,
    },
    4: {
      id: "4",
      title: "MOO Hardcover Notebook",
      description: ipsum,
      image: "./moo-product-image.jpeg",
      "cover-colour": "red",
      "paper-type": "lined",
      "page-count": 170,
      price: 15,
    },
  },

  options: {
    "cover-colour": {
      type: "cover-colour",
      label: "Choose your colour",
      values: {
        blue: {
          value: "blue",
          label: "Ocean",
        },
        red: {
          value: "red",
          label: "Sunset",
        },
      },
    },
    "paper-type": {
      type: "paper-type",
      label: "Choose your page layout",
      values: {
        dotted: {
          value: "dotted",
          label: "Dotted",
        },
        lined: {
          value: "lined",
          label: "Lined",
        },
      },
    },
  },

  // options: [
  //   {
  //     type: "cover-colour",
  //     label: "Choose your colour",
  //     values: [
  //       {
  //         value: "blue",
  //         label: "Ocean",
  //       },
  //       {
  //         value: "red",
  //         label: "Sunset",
  //       },
  //     ],
  //   },
  //   {
  //     type: "paper-type",
  //     label: "Choose your page layout",
  //     values: [
  //       {
  //         value: "dotted",
  //         label: "Dotted",
  //       },
  //       {
  //         value: "lined",
  //         label: "Lined",
  //       },
  //     ],
  //   },
  // ],
  chosenOptions: {
    "cover-colour": "blue",
    "paper-type": "dotted",
  },
  // selectedProduct: {
  //     label: "Hardcover Notebook",
  //     "cover-colour": "red",
  //     "paper-type": "dotted",
  //     "page-count": 170
  // },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_OPTIONS":
      console.log("action.data.options", action.data);
      return {
        ...state,
        chosenOptions: {
          ...state.chosenOptions,
          [action.data.type]: action.data.value,
        },
      };
    // case "SELECT_PRODUCT":
    //   return {
    //     ...state,
    //     selectedProduct: action.data.selectedProduct
    //   }
    default:
      return state;
  }
};
export default reducer;
