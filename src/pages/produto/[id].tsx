"use client";
// Next
import Image from "next/image";

// Components
import Layout from "../layout";

// Icons
import { BsCart2 } from "react-icons/bs";

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
  console.log(productData.data[0]);

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
        <div className="flex flex-col gap-9">
          {/* Logo + Carrinho */}
          <div className="flex flex-row justify-between items-center py-20 phones:px-0">
            <div>
              <a
                href="#"
                className="text-3xl text-black font-bold phones:text-xl"
              >
                E-commerce
              </a>

              {/* Breadcrumb */}
              <Breadcrumb
                separator=">"
                items={[{ title: "Home", href: "/" }, { title: "Produto" }]}
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <BsCart2 className="text-3xl phones:text-xl" />
              <p className="phones:text-sm">Carrinho</p>
            </div>
          </div>

          {/* Carrinho + produto */}
          <div className="flex flex-row gap-[3%]">
            {/* Imagem */}
            <div className="">
              <Image
                className="rounded-xl shadow-md w-[800px] h-[500px]"
                alt="example"
                src={`/images/card1.jpg`}
                width={800}
                height={500}
              />
            </div>

            {/* Descrição */}
            <div className="flex flex-col justify-between text-left">
              <div>
                <h1 className="font-bold text-3xl">
                  {productData.data[0].product}
                </h1>
                <p>Lorem ipsum dollor at amet ipsum dollor lorem</p>
                <hr />
              </div>

              {/* Valor */}
              <div>
                <h3 className="font-bold text-2xl">
                  R${productData.data[0].value}
                </h3>
                <p className="text-xs">Ou em 12x de R$ 45,00</p>
                <hr />
              </div>

              <button className="w-full h-10 rounded-xl bg-[#27ab83] text-white hover:bg-[#8EEDC7] phones:mx-auto">
                Comprar
              </button>
            </div>
          </div>

          {/* Informações/Detalhes do produto */}
          <div className="flex flex-row justify-between">
            <div>
              <h3 className="font-bold text-2xl">Informações do produto</h3>
              <hr />

              {productsInformations.map((info, key) => (
                <p key={key} className="text-sm">
                  <strong>Informação {info.id}: </strong>
                  {info.information}
                </p>
              ))}
            </div>
            <div>
              <div>
                <h3 className="font-bold text-2xl">Detalhes do produto</h3>
                <hr />

                {productsDetails.map((detail, key) => (
                  <p key={key} className="text-sm">
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
