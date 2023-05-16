"use client";
// Next
import Image from "next/image";
// React
import React from "react";
// Components
import Layout from "../layout";
// Icons
import { FiTrash } from "react-icons/fi";
import { Button } from "antd";

export default function Carrinho(produtos: Array<string>) {
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

            {/* Produtos */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row items-center gap-[2vh] w-[90px] h-[70px] responsive:w-full">
                  <Image
                    className="rounded-xl shadow-md w-full h-full object-cover object-center responsive:w-full responsive:h-fit"
                    alt="example"
                    src={`/images/card1.jpg`}
                    width={100}
                    height={100}
                  />
                  <p>Produto1</p>
                </div>
                {/* Informações */}
                <p className="font-bold">R$45,00</p>
                <p className="font-bold">2</p>
                <p className="font-bold">R$90,00</p>
                {/* Remover produto */}
                <div>
                  <FiTrash color="#8E2C2C" size={30} />
                </div>
              </div>
              <hr />
            </div>
          </div>

          {/* Total value */}
          <div className="flex flex-row justify-end items-center text-2xl">
            <h1>
              Valor total <br /> <strong>R$535,99</strong>
            </h1>
          </div>

          {/* Continue buying + Finish order */}
          <div className="flex flex-row justify-end items-center gap-[1vh]">
            <button className="w-48 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-500 phones:mx-auto">
              Continuar comprando
            </button>
            <button className="w-40 h-10 rounded-xl bg-[#199473] text-white hover:bg-[#42A88C] phones:mx-auto">
              Finalizar pedido
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
