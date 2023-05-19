"use client";
// Next
import Image from "next/image";
// React
import React from "react";
// Components
import Layout from "../layout";
import { getAllPostIds, getProductData } from "../../lib/produtos";
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
  // Context contain the datas about the products (id, value, name, quantity)
  const cartContext = useCartContext();
  const totalProcutsInCart: any = cartContext[0];
  const addToQuantity: any = cartContext[6];
  const removeFromQuantity: any = cartContext[7];
  const getProductInCartById: any = cartContext[8];
  const addProductToCart: any = cartContext[2];

  const productInCart = getProductInCartById(productData.data[0].id);

  // If in the first moment the product in cart, quantity = 1
  // Else quantity = 0
  const [quantity, setQuantity] = React.useState(
    productInCart.length > 0 ? 1 : 0
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

  const productsInformations = [
    {
      id: "01",
      information: "Lorem ipsum dollor at amet",
    },
    {
      id: "02",
      information: "Lorem ipsum dollor at amet",
    },
    {
      id: "03",
      information: "Lorem ipsum dollor at amet",
    },
    {
      id: "04",
      information: "Lorem ipsum dollor at amet",
    },
  ];
  const productsDetails = [
    {
      id: "01",
      detail: "Lorem ipsum dollor at amet",
    },
    {
      id: "02",
      detail: "Lorem ipsum dollor at amet",
    },
    {
      id: "03",
      detail: "Lorem ipsum dollor at amet",
    },
    {
      id: "04",
      detail: "Lorem ipsum dollor at amet",
    },
    {
      id: "05",
      detail: "Lorem ipsum dollor at amet",
    },
  ];

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
                src={`/images/card1.jpg`}
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

              <hr />

              {/* Valor */}
              <div>
                <h3 className="font-bold text-2xl">
                  R${productData.data[0].price}
                </h3>
                <p className="text-xs">Ou em 12x de R$ 45,00</p>
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
              <hr />
              <button className="w-full h-10 rounded-xl bg-[#199473] text-white hover:bg-[#27AB83] phones:mx-auto">
                Comprar
              </button>
            </div>
          </div>

          {/* Informações/Detalhes do produto */}
          <div className="flex flex-row justify-between responsive:flex-col responsive:justify-center responsive:gap-[5vh]">
            {/* Informações */}
            <div className="w-[50%] responsive:w-full responsive:text-center">
              <h3 className="font-bold text-3xl phones:text-xl">
                Informações do produto
              </h3>
              <hr className="w-[95%]" />

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
              <hr />

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
