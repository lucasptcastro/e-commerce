"use client";
// Default
import Image from "next/image";
import Link from "next/link";
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
  const removeAllProductsFromCart = cartContext[5];
  const getTotalValueOfProductsInCart = cartContext[9];

  // Status 0 - Empty | Status 1 - With item | Status 2 - Cart finished
  const [cartStatus, setCarStatus] = React.useState(0);

  const cartEmptyOrNotOrFinished = () => {
    if (cartStatus != 2) {
      if (productsInCart.slice(1).length > 0) {
        return (
          <>
            {/* Products */}
            <div className="flex flex-col gap-5">
              {productsInCart.slice(1).map((product: any, key: number) => (
                <>
                  <div
                    className="flex flex-row justify-between items-center w-full h-[10vh]"
                    key={key}
                  >
                    <div className="flex flex-row items-center gap-[1vh] responsive:flex-col responsive:gap-[0.2vh] w-[25%]">
                      <Link
                        href={`/produto/${product.id}`}
                        className="W-[90px]"
                      >
                        <Image
                          className="rounded-xl shadow-md w-full h-full object-cover object-center"
                          alt="example"
                          src={`/images/product${product.id}.jpg`}
                          width={100}
                          height={100}
                        />
                      </Link>
                      <p className="text-[90%]">{product.name}</p>
                    </div>

                    {/* Informations */}
                    <div className="flex justify-between w-[50%]">
                      <p className="font-bold text-[90%]">{`R$ ${product.value.toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}`}</p>
                      <p className="font-bold text-[90%]">{product.quantity}</p>
                      <p className="font-bold text-[90%]">
                        {(product.value * product.quantity).toLocaleString(
                          "pt-br",
                          {
                            minimumFractionDigits: 2,
                          }
                        )}
                      </p>
                    </div>

                    {/* To remove product */}
                    <div>
                      <FiTrash
                        className="hover:cursor-pointer text-xl"
                        color="#8E2C2C"
                        onClick={() => {
                          removeProductFromCar(product.id);
                        }}
                      />
                    </div>
                  </div>
                  <hr className="opacity-20" />
                </>
              ))}
            </div>

            {/* Total value */}
            <div className="flex flex-row justify-end items-center text-2xl">
              <h1 className="text-end">
                Valor total <br />
                <strong>
                  R$
                  {getTotalValueOfProductsInCart().toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </h1>
            </div>

            {/* Continue buying + Finish order */}
            <div className="flex flex-row justify-end items-center gap-[1vh]">
              <button className="w-48 h-10 text-[80%] rounded-xl bg-[#199473] text-white hover:bg-[#42A88C] phones:mx-auto">
                Continuar comprando
              </button>
              <button
                className="w-40 h-10 text-[90%] rounded-xl bg-textBlue text-white hover:bg-colorBlueHover phones:mx-auto"
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
