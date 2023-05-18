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
    let totalValue = (totalValueOfProductsInCart + value * quantity).toFixed(2);

    if (index < 0) {
      productsInCart.push({
        id: id,
        name: name,
        value: value,
        quantity: quantity,
        image: image,
      });

      addToTotal();
      setTotalValueOfProductsInCart(Number(totalValue));
    }
  }

  function removeProductFromCart(id) {
    let index = productsInCart.findIndex((value) => value.id == id);
    let productsInCartList = productsInCart.filter((value) => value.id == id);
    let valueOfProduct = productsInCartList[0].value;
    let quantityOfProduct = productsInCartList[0].quantity;
    let totalValue = (
      totalValueOfProductsInCart -
      valueOfProduct * quantityOfProduct
    ).toFixed(2);

    if (index >= 0) {
      productsInCart.splice(index, 1);

      removeFromTotal();

      setTotalValueOfProductsInCart(Number(totalValue));
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
