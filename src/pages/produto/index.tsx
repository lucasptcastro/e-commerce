"use client";
// Next
import Image from "next/image";

// Components
import Layout from "../layout";

// Icons
import { BsCart2 } from "react-icons/bs";

// AntDesign
import { Button, Row, Col, Card, Breadcrumb } from "antd";

export default function Produto() {
  const informacoes = [
    {
      id: "01",
      informacao: "Lorem ipsum dollor at amet",
    },
    {
      id: "02",
      informacao: "Lorem ipsum dollor at amet",
    },
    {
      id: "03",
      informacao: "Lorem ipsum dollor at amet",
    },
    {
      id: "04",
      informacao: "Lorem ipsum dollor at amet",
    },
  ];
  const detalhes = [
    {
      id: "01",
      detalhe: "Lorem ipsum dollor at amet",
    },
    {
      id: "02",
      detalhe: "Lorem ipsum dollor at amet",
    },
    {
      id: "03",
      detalhe: "Lorem ipsum dollor at amet",
    },
    {
      id: "04",
      detalhe: "Lorem ipsum dollor at amet",
    },
    {
      id: "05",
      detalhe: "Lorem ipsum dollor at amet",
    },
  ];

  return (
    <>
      <Layout>
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
              <h1 className="font-bold text-3xl">Produto 01</h1>
              <p>Lorem ipsum dollor at amet ipsum dollor lorem</p>
              <hr />
            </div>

            {/* Valor */}
            <div>
              <h3 className="font-bold text-2xl">R$45,00</h3>
              <p className="text-xs">Ou em 12x de R$ 45,00</p>
              <hr />
            </div>

            <button className="w-40 h-10 rounded-xl bg-[#27ab83] text-white hover:bg-[#8EEDC7] phones:mx-auto">
              Comprar
            </button>
          </div>
        </div>

        {/* Informações/Detalhes do produto */}
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="font-bold text-2xl">Informações do produto</h3>
            <hr />

            {informacoes.map((infos, key) => (
              <p key={key} className="text-sm">
                <strong>Informação {infos.id}: </strong>
                {infos.informacao}
              </p>
            ))}
          </div>
          <div>
            <div>
              <h3 className="font-bold text-2xl">Detalhes do produto</h3>
              <hr />

              {detalhes.map((infos, key) => (
                <p key={key} className="text-sm">
                  <strong>Detalhe {infos.id}: </strong>
                  {infos.detalhe}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
