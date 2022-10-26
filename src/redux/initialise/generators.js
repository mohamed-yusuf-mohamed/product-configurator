import lorem from "./lorem.json"
import headings from "./headings"

export const generateProducts = (data) => {
  return data.products.reduce(
    (prev, product) => ({
      ...prev,
      [product.id]: {
        id: product.id,
        title: product["product-label"],
        description: lorem,
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

  const attributes = Object.values(products).reduce((prev, product) => {
    return [...prev, ...product.attributes]
  }, [])

  const selectable = []
  for (const attribute of attributes) {
    if (attribute.selectable) selectable.push(attribute)
  }

  const values = selectable.reduce(
    (prev, attribute) => ({
      ...prev,
      [attribute.value]: attribute,
    }),
    {}
  )

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
            label: attribute.label,
          },
        },
      },
    }),
    {}
  )
}
