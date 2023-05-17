import { createContext, useContext, useState } from "react";

const CarContext = createContext([0, [], () => {}, () => {}, 0]);

export function CarProvider({ children }) {
  const [total, setTotal] = useState(0);

  const [productsInCar, setProductsInCar] = useState([
    { id: 0, name: "", value: 0, quantity: 0, image: "" },
  ]);

  const [totalProducts, setTotalProducts] = useState(0);

  const addToTotal = () => {
    setTotal(total + 1);
  };

  const removeFromTotal = () => {
    setTotal(total - 1);
  };

  function addProductToCar(id, name, value, quantity, image) {
    let index = productsInCar.findIndex((value) => value.id == id);

    if (index < 0) {
      productsInCar.push({
        id: id,
        name: name,
        value: value,
        quantity: quantity,
        image: image,
      });

      addToTotal();
      setTotalProducts(totalProducts + value * quantity);
    }
  }

  function removeProductToCar(id) {
    let index = productsInCar.findIndex((value) => value.id == id);

    if (index >= 0) {
      productsInCar.splice(index, 1);

      removeFromTotal();
    }
  }

  return (
    <CarContext.Provider
      value={[
        total,
        productsInCar,
        addProductToCar,
        removeProductToCar,
        totalProducts,
      ]}
    >
      {children}
    </CarContext.Provider>
  );
}
export function useCarContext() {
  return useContext(CarContext);
}
