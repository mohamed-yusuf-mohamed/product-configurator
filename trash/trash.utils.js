import headings from "../src/redux/initialise/headings"
import { LoremIpsum } from "lorem-ipsum"
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 5,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

// lorem.generateWords(1);
// lorem.generateSentences(5);
// lorem.generateParagraphs(7);

const ipsum = lorem.generateParagraphs(1)

export const generateProducts = (data) => {
  return data.products.reduce(
    (prev, product) => ({
      ...prev,
      [product.id]: {
        id: product.id,
        title: product["product-label"],
        description: ipsum,
        image: "./moo-product-image.jpeg",
        price: product.price,
        attributes: {
          ...product.attributes.reduce(
            (prev, attribute) => ({
              ...prev,
              [attribute.type]: attribute,
            }),
            {}
          ),
        },
      },
    }),
    {}
  )
}

export const generateOptions = (data) => {
  const products = data.products
  // const attributes = []
  // for (const product in products) {
  //   // attributes.push()
  // }

  const attributes = Object.values(products).reduce((prev, product) => {
    return [...prev, ...product.attributes]
  }, [])

  console.log("attributes", attributes)

  const selectable = []
  for (const attribute of attributes) {
    if (attribute.selectable) selectable.push(attribute)
  }

  console.log("selectable", selectable)
  // const values = {}
  const values = selectable.reduce(
    (prev, attribute) => ({
      ...prev,
      [attribute.value]: attribute,
    }),
    {}
  )
  console.log("values", values)

  // const sample = {
  //   lined: {
  //     id: "",
  //     type: "paper-type",
  //     value: "lined",
  //     label: "Lined",
  //     selectable: true
  //   }
  // }

  return Object.values(values).reduce(
    (prev, attribute) => ({
      ...prev,
      [attribute.type]: {
        type: attribute.type,
        label: headings.options[attribute.type],
        values: {
          ...prev[attribute.type]?.values,
          [attribute.value]: {
            value: attribute.value,
            label: attribute.label
          },
        },
      },
    }),
    {}
  )

  // console.log("options", options)

  // const options = values.reduce()

  //  = Object.values(data.products).filter((product) => {

  // })

  // Object.values(data.products)
  //   .map((product) => product.attributes)
  //   .reduce((prev, attribute) => ({
  //     ...prev,
  //     [attribute.type]: {
  //       type: attribute.type,
  //       label: attribute.label,
  //       values: {

  //       }
  //     },
  //   }))
}

// const sample =     1: {
//   id: "1",
//   title: "MOO Hardcover Notebook",
//   description: ipsum,
//   image: "./moo-product-image.jpeg",
//   attributes: {
//     // selectable: {
//     "cover-colour": {
//       id: "cover-colour",
//       value: "blue",
//       label: "Ocean",
//       selectable: true,
//     },
//     "paper-type": {
//       id: "paper-type",
//       value: "dotted",
//       label: "Dotted",
//       selectable: true,
//     },
//     "page-count": {
//       id: "page-count",
//       value: 170,
//       label: "Pages",
//       selectable: false,
//     },
//   },
//   price: 17,
// },
