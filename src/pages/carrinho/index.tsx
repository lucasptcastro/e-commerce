"use client";
// Next
import Image from "next/image";
// React
import React from "react";
// Components
import Layout from "../layout";
import EmptyCart from "./emptyCart";
import { useCartContext } from "../../context/CartContext";
import Result from "../../components/Result";
// Icons
import { FiTrash } from "react-icons/fi";

export default function Carrinho() {
  // useContext
  const cartContext: any = useCartContext();
  const productsInCart = cartContext[1];

  const removeProductFromCar = cartContext[3];
  const getTotalValueOfProducts = cartContext[4];
  const removeAllProductsFromCart = cartContext[5];

  // Status 0 - Empty
  // Status 1 - With item
  // Status 2 - Cart finished

  const [cartStatus, setCarStatus] = React.useState(0);

  const cartEmptyOrNotOrFinished = () => {
    if (cartStatus != 2) {
      if (productsInCart.slice(1).length > 0) {
        return (
          <>
            {/* Produtos */}
            <div className="flex flex-col gap-5">
              {productsInCart.slice(1).map((product: any, key: number) => (
                <>
                  <div
                    className="flex flex-row justify-between items-center w-full"
                    key={key}
                  >
                    <div className="flex flex-row items-center gap-[2vh] w-[90px] h-[70px] responsive:w-full">
                      <Image
                        className="rounded-xl shadow-md w-full h-full object-cover object-center responsive:w-full responsive:h-fit"
                        alt="example"
                        src={`/images/card1.jpg`}
                        width={100}
                        height={100}
                        onClick={() => console.log(product)}
                      />
                      <p>{product.name}</p>
                    </div>
                    {/* Informações */}
                    <p className="font-bold">{`R$ ${product.value}`}</p>
                    <p className="font-bold">{product.quantity}</p>
                    <p className="font-bold">
                      {product.value * product.quantity}
                    </p>
                    {/* Remover produto */}
                    <div>
                      <FiTrash
                        className="hover:cursor-pointer"
                        color="#8E2C2C"
                        size={30}
                        onClick={() => {
                          removeProductFromCar(product.id);
                        }}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            {/* Total value */}
            <div className="flex flex-row justify-end items-center text-2xl">
              <h1>
                Valor total <br /> <strong>R${getTotalValueOfProducts}</strong>
              </h1>
            </div>

            {/* Continue buying + Finish order */}
            <div className="flex flex-row justify-end items-center gap-[1vh]">
              <button className="w-48 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-500 phones:mx-auto">
                Continuar comprando
              </button>
              <button
                className="w-40 h-10 rounded-xl bg-[#199473] text-white hover:bg-[#42A88C] phones:mx-auto"
                onClick={() => {
                  setCarStatus(2);
                  removeAllProductsFromCart();
                }}
              >
                Finalizar pedido
              </button>
            </div>
          </>
        );
      } else {
        return (
          <div className="pt-20">
            <EmptyCart />
          </div>
        );
      }
    } else {
      return <Result />;
    }
  };

  return (
    <>
      <Layout props="Carrinho">
        <div className="flex flex-col gap-12">
          {/* Items */}
          <div className="flex flex-col gap-[3vh]">
            <div>
              <h1 className="text-3xl font-semibold text-[#252A43]">
                Itens do carrinho
              </h1>
            </div>
          </div>

          <>{cartEmptyOrNotOrFinished()}</>
        </div>
      </Layout>
    </>
  );
}
