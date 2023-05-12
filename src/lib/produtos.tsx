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
      product: "produto1",
      value: "392,00",
    },
    {
      id: 2,
      product: "produto2",
      value: "41,00",
    },
    {
      id: 3,
      product: "produto3",
      value: "63,00",
    },
    {
      id: 4,
      product: "produto4",
      value: "21,00",
    },
    {
      id: 5,
      product: "produto5",
      value: "62,00",
    },
    {
      id: 6,
      product: "produto6",
      value: "123,00",
    },
    {
      id: 7,
      product: "produto7",
      value: "65,00",
    },

    {
      id: 8,
      product: "produto8",
      value: "83,00",
    },

    {
      id: 9,
      product: "produto9",
      value: "49,00",
    },

    {
      id: 10,
      product: "produto10",
      value: "423,00",
    },

    {
      id: 11,
      product: "produto11",
      value: "18,00",
    },

    {
      id: 12,
      product: "produto12",
      value: "194,00",
    },
  ];

  const data = products.filter((product) => product.id == id);

  // Return id and data of the products
  return {
    id,
    data,
  };
}
