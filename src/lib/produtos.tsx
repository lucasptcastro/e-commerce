export function getAllPostIds() {
  return [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
    {
      params: {
        id: "4",
      },
    },
    {
      params: {
        id: "5",
      },
    },
    {
      params: {
        id: "6",
      },
    },
    {
      params: {
        id: "7",
      },
    },
    {
      params: {
        id: "8",
      },
    },
    {
      params: {
        id: "9",
      },
    },
    {
      params: {
        id: "10",
      },
    },
    {
      params: {
        id: "11",
      },
    },
    {
      params: {
        id: "12",
      },
    },
  ];
}

export function getProductData(id: number) {
  const products = [
    {
      id: 1,
      name: "produto1",
      price: 392.0,
    },
    {
      id: 2,
      name: "produto2",
      price: 41.55,
    },
    {
      id: 3,
      name: "produto3",
      price: 63.0,
    },
    {
      id: 4,
      name: "produto4",
      price: 21.0,
    },
    {
      id: 5,
      name: "produto5",
      price: 62.0,
    },
    {
      id: 6,
      name: "produto6",
      price: 123.0,
    },
    {
      id: 7,
      name: "produto7",
      price: 65.0,
    },
    {
      id: 8,
      name: "produto8",
      price: 83.0,
    },
    {
      id: 9,
      name: "produto9",
      price: 49.0,
    },
    {
      id: 10,
      name: "produto10",
      price: 423.0,
    },
    {
      id: 11,
      name: "produto11",
      price: 18.0,
    },
    {
      id: 12,
      name: "produto12",
      price: 194.0,
    },
  ];

  const data = products.filter((product) => product.id == id);

  // Return id and data of the products
  return {
    id,
    data,
  };
}
