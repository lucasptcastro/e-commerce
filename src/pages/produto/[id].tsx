"use client";
// Next
import Image from "next/image";
import Link from "next/link";

// React
import React from "react";

// Components
import Layout from "../layout";

// Icons
import { BsFillCartFill } from "react-icons/bs";

// AntDesign
import { Breadcrumb } from "antd";

import { getAllPostIds, getProductData } from "../../lib/produtos";

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
  const [quantity, setQuantity] = React.useState(0);

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
      <Layout>
        <div className="flex flex-col gap-12">
          {/* Logo + Carrinho */}
          <div className="flex flex-row justify-between items-center">
            <div>
              <Link
                href="/"
                className="text-3xl text-black font-bold phones:text-xl"
              >
                E-commerce
              </Link>

              {/* Breadcrumb */}
              <Breadcrumb
                separator=">"
                items={[{ title: "Home", href: "/" }, { title: "Produto" }]}
              />
            </div>
            <div className="flex flex-row items-center gap-5">
              <div className="flex justify-center items-center text-center">
                <BsFillCartFill
                  className="absolute text-4xl phones:text-3xl"
                  color="#014D40"
                />
                <span className="absolute text-[1.8vh] text-white phones:text-sm">
                  10
                </span>
              </div>
              <p className="phones:text-sm">Carrinho</p>
            </div>
          </div>

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
                  {productData.data[0].product}
                </h1>
                <p>Lorem ipsum dollor at amet ipsum dollor lorem</p>
              </div>

              <hr />

              {/* Valor */}
              <div>
                <h3 className="font-bold text-2xl">
                  R${productData.data[0].value}
                </h3>
                <p className="text-xs">Ou em 12x de R$ 45,00</p>
              </div>

              {/* Quantidade */}
              <div className="flex flex-row justify-between items-center text-3xl px-[10%] w-[50%] h-[10%] rounded-md bg-[#ECECEC] responsive:mx-auto">
                <button
                  onClick={() => {
                    if (quantity != 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="text-3xl font-bold"
                >
                  -
                </button>
                <span className="text-3xl font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
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
