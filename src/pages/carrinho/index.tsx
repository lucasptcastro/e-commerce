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
import { FiTrash } from "react-icons/fi";

// AntDesign
import { Breadcrumb } from "antd";

export default function Carrinho(produtos: Array<string>) {
  console.log(produtos);

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
                items={[{ title: "Home", href: "/" }, { title: "Carrinho" }]}
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
