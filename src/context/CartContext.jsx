import { createContext, useContext, useState } from "react";

const CartContext = createContext([0, [], () => {}, () => {}, 0, () => {}]);

export function CartProvider({ children }) {
  const [totalProcutsInCart, setTotalTotalProcutsInCart] = useState(0);

  const [productsInCart, setProductsInCart] = useState([
    { id: 0, name: "", value: 0, quantity: 0, image: "" },
  ]);

  const [totalValueOfProductsInCart, setTotalValueOfProductsInCart] =
    useState(0);

  const addToTotal = () => {
    setTotalTotalProcutsInCart(totalProcutsInCart + 1);
  };

  const removeFromTotal = () => {
    setTotalTotalProcutsInCart(totalProcutsInCart - 1);
  };

  function addProductToCart(id, name, value, quantity, image) {
    let index = productsInCart.findIndex((value) => value.id == id);

    if (index < 0) {
      productsInCart.push({
        id: id,
        name: name,
        value: value,
        quantity: quantity,
        image: image,
      });

      addToTotal();
      setTotalValueOfProductsInCart(
        totalValueOfProductsInCart + value * quantity
      );
    }
  }

  function removeProductFromCart(id) {
    let index = productsInCart.findIndex((value) => value.id == id);

    if (index >= 0) {
      productsInCart.splice(index, 1);

      removeFromTotal();
    }
  }

  function removeAllProductsFromCart() {
    productsInCart.splice(1);

    setTotalTotalProcutsInCart(0);
  }

  return (
    <CartContext.Provider
      value={[
        totalProcutsInCart,
        productsInCart,
        addProductToCart,
        removeProductFromCart,
        totalValueOfProductsInCart,
        removeAllProductsFromCart,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCartContext() {
  return useContext(CartContext);
}
