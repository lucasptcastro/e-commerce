"use client";
// Next
import Image from "next/image";
// Components
import Header from "../components/Header";
// Icons
import { BsCart2 } from "react-icons/bs";
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
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Main */}
      <div className="flex flex-col px-48 bg-[#EFFCF6] h-max">
        {/* Logo + Carrinho */}
        <div className="flex flex-row justify-between items-center py-20 px-24">
          <a href="#" className="text-3xl text-black font-bold">
            E-commerce
          </a>
          <div className="flex flex-row items-center gap-2">
            <BsCart2 className="text-3xl" />
            <p>Carrinho</p>
          </div>
        </div>

        {/* Card principal */}
        <div className="flex flex-col gap-10 py-10 px-10 mx-24 rounded-xl bg-[#8EEDC7]">
          <h3 className="text-2xl font-bold">
            Olá, somos o E-commerce! Somos 100% nacional e o maior revendedor de
            produtos eletrônicos do país!
          </h3>
          <p className="text-xl">
            Contate nossos revendedores pelo núnero: <br />
            (84) 99999-9999
          </p>
          <button className="w-40 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-500">
            Comprar agora
          </button>
        </div>

        {/* Produtos */}
        <div className="py-10 px-24 flex flex-col gap-10">
          <h1 className="font-bold text-2xl">Confira nossos produtos</h1>
          <Row gutter={[16, 24]}>
            {produtos.map((value, key) => (
              <Col key={key} span={6}>
                <Card
                  className="w-80"
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
                  <div className="flex justify-between">
                    <div></div>
                    <div></div>
                    <div>
                      <BsCart2 className="text-lg hover:text-blue-700" />
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
