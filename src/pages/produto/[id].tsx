"use client";
// Default
import Image from "next/image";
import Link from "next/link";
import React from "react";
// Components
import Layout from "../layout";
import {
  getAllPostIds,
  getProductData,
  getProductInformationsById,
  getProductDetailsById,
} from "../../lib/products";
import { useCartContext } from "../../context/CartContext";

// Collects the URLs that will be used as a parameter to leave dynamic
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const productData = getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default function Post({ productData }: any) {
  // useContext
  const cartContext = useCartContext();
  const addToQuantity: any = cartContext[6];
  const removeFromQuantity: any = cartContext[7];
  const getProductInCartById: any = cartContext[8];
  const addProductToCart: any = cartContext[2];
  const productInCart = getProductInCartById(productData.data[0].id);

  // products
  const productsDetails = getProductDetailsById(productData.data[0].id);
  const productsInformations = getProductInformationsById(
    productData.data[0].id
  );

  // If in the first moment the product in cart, quantity = 1
  // Else quantity = 0
  const [quantity, setQuantity] = React.useState(
    productInCart.length > 0 ? productInCart[0].quantity : 0
  );

  const verifyIfProductIsInCartForToAdd = () => {
    // If product is in cart, added +1 to the quantity
    if (productInCart.length > 0) {
      addToQuantity(productData.data[0].id);
      setQuantity(productInCart[0].quantity);
    }
    // If product is not in cart, added in the cart
    else {
      addProductToCart(
        productData.data[0].id,
        productData.data[0].name,
        productData.data[0].price,
        1,
        `/images/card${productData.data[0].id}.jpg`
      );
      setQuantity(1);
    }
  };

  const verifyIfProductIsInCartForToRemove = () => {
    // If product is in cart, remove 1 to the quantity
    if (productInCart.length > 0) {
      removeFromQuantity(productData.data[0].id);
      setQuantity(productInCart[0].quantity);
    }
  };

  return (
    <>
      <Layout props={"Produto"}>
        <div className="flex flex-col gap-12">
          {/* Imagem + Descrição */}
          <div className="flex flex-row justify-between h-[500px] gap-[3%] responsive:flex-col responsive:w-full responsive:h-fit">
            {/* Imagem */}
            <div className="w-[65%] responsive:w-full ">
              <Image
                className="rounded-xl shadow-md w-full h-[500px] object-cover object-center responsive:w-full responsive:h-fit"
                alt="example"
                src={`/images/product${productData.data[0].id}.jpg`}
                width={500}
                height={500}
              />
            </div>

            {/* Descrição */}
            <div className="flex flex-col justify-between text-left py-[2%] w-[32%] responsive:w-full responsive:text-center responsive:gap-[3vh]">
              {/* Título do produto */}
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-3xl">
                  {productData.data[0].name}
                </h1>
                <p>Lorem ipsum dollor at amet ipsum dollor lorem</p>
              </div>

              <hr className="opacity-20" />

              {/* Valor */}
              <div>
                <h3 className="font-bold text-2xl">
                  R$
                  {productData.data[0].price.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </h3>
                <p className="text-xs">
                  Ou em 12x de R$
                  {(productData.data[0].price / 12).toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>

              {/* Quantidade */}
              <div className="flex flex-row justify-between items-center text-3xl px-[10%] w-[50%] h-[10%] rounded-md bg-[#ECECEC] responsive:mx-auto">
                <button
                  onClick={() => {
                    verifyIfProductIsInCartForToRemove();
                  }}
                  className="text-3xl font-bold"
                >
                  -
                </button>
                <span className="text-3xl font-bold">{quantity}</span>
                <button
                  onClick={() => {
                    verifyIfProductIsInCartForToAdd();
                  }}
                  className="text-3xl font-bold"
                >
                  +
                </button>
              </div>

              {/* Comprar */}
              <hr className="opacity-20" />
              <Link href="/carrinho">
                <button className="w-full h-10 rounded-xl bg-textBlue text-white hover:bg-colorBlueHover phones:mx-auto">
                  Comprar
                </button>
              </Link>
            </div>
          </div>

          {/* Informações/Detalhes do produto */}
          <div className="flex flex-row justify-between responsive:flex-col responsive:justify-center responsive:gap-[5vh]">
            {/* Informações */}
            <div className="w-[50%] responsive:w-full responsive:text-center">
              <h3 className="font-bold text-3xl phones:text-xl">
                Informações do produto
              </h3>
              <hr className="w-[95%] opacity-20" />

              <div className="flex flex-col pt-[2%] gap-[1vh]">
                {productsInformations.map((info, key) => (
                  <p key={key} className="text-base phones:text-xs">
                    <strong>Informação {info.id}: </strong>
                    {info.information}
                  </p>
                ))}
              </div>
            </div>

            {/* Detalhe */}
            <div className="w-[50%] responsive:w-full responsive:text-center">
              <h3 className="font-bold text-3xl phones:text-xl">
                Detalhes do produto
              </h3>
              <hr className="opacity-20" />

              <div className="flex flex-col pt-[2%] gap-[1vh]">
                {productsDetails.map((detail, key) => (
                  <p key={key} className="text-base phones:text-xs">
                    <strong>Detalhe {detail.id}: </strong>
                    {detail.detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
