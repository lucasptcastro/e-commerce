"use client";
// Next
import Image from "next/image";
import Link from "next/link";

// Components
import Layout from "./layout";

// Icons
import { BsCart2 } from "react-icons/bs";

// CSS
import styles from "./index.module.css";

// AntDesign
import { Button, Row, Col, Card } from "antd";
const { Meta } = Card;

export default function Home() {
  const produtos = [
    {
      produto: "produto1",
      valor: "392,00",
    },
    {
      produto: "produto2",
      valor: "41,00",
    },
    {
      produto: "produto3",
      valor: "63,00",
    },
    {
      produto: "produto4",
      valor: "21,00",
    },
    {
      produto: "produto5",
      valor: "62,00",
    },
    {
      produto: "produto6",
      valor: "123,00",
    },
    {
      produto: "produto7",
      valor: "65,00",
    },
    {
      produto: "produto8",
      valor: "83,00",
    },
    {
      produto: "produto9",
      valor: "49,00",
    },
    {
      produto: "produto10",
      valor: "423,00",
    },
    {
      produto: "produto11",
      valor: "18,00",
    },
    {
      produto: "produto12",
      valor: "194,00",
    },
  ];

  return (
    <>
      <Layout>
        {/* Logo + Carrinho */}
        <div className="flex flex-row justify-between items-center py-20">
          <a href="#" className="text-3xl text-black font-bold phones:text-xl">
            E-commerce
          </a>
          <div className="flex flex-row items-center gap-2">
            <BsCart2 className="text-3xl phones:text-xl" />
            <p className="phones:text-sm">Carrinho</p>
          </div>
        </div>

        {/* Card principal */}
        <div className="flex flex-col gap-10 py-10 px-[3%] rounded-xl bg-[#8EEDC7]">
          <h3 className="text-2xl font-bold phones:text-center phones:text-base">
            Olá, somos o E-commerce! Somos 100% nacional e o maior revendedor de
            produtos eletrônicos do país!
          </h3>
          <p className="text-xl phones:text-center phones:text-base">
            Contate nossos revendedores pelo núnero: <br />
            (84) 99999-9999
          </p>
          <button className="w-40 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-500 phones:mx-auto">
            Comprar agora
          </button>
        </div>
        {/* Produtos */}
        <div className="flex flex-col py-10 gap-10 phones:w-full">
          <h1 className="font-bold text-2xl phones:text-center">
            Confira nossos produtos
          </h1>

          <div className="flex flex-row gap-3 flex-wrap justify-center items-center">
            {produtos.map((value, key) => (
              <div key={key}>
                <Link href={`/produto/${key + 1}`}>
                  <Card
                    className="w-[319px] shadow-md phones:w-auto"
                    hoverable
                    cover={
                      <Image
                        alt="example"
                        src={`/images/card${key + 1}.jpg`}
                        width={500}
                        height={500}
                      />
                    }
                  >
                    <Meta
                      title={
                        <div className="flex justify-between">
                          <p className="font-bold">{value.produto}</p>
                          <p>R${value.valor}</p>
                        </div>
                      }
                      description="Lorem ipsum dollor at amet ipsum dollor lorem"
                    />
                    <div className="flex justify-end gap-[2%] items-center py-[1%]">
                      <div className={styles.addedToCar}>
                        <p>
                          <span></span>
                          Adicionar ao carrinho
                        </p>
                      </div>
                      <div>
                        <BsCart2 className="text-lg hover:text-blue-700 hover:-rotate-12" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
