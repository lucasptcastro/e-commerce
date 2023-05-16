"use client";
// Next
import Image from "next/image";
import Link from "next/link";
import React from "react";
// Components
import Layout from "./layout";
import { useCarContext } from "../context/CarContext";
// Icons
import { BsCart2 } from "react-icons/bs";
// AntDesign
import { Card } from "antd";
const { Meta } = Card;

interface IProductSelected {
  id?: number;
  name?: string;
  value?: string;
  quantity?: number;
}

export default function Home() {
  // useContext
  const carContext = useCarContext();
  const carContextToggleTotal: any = carContext[1];

  // Products
  const produtos = [
    {
      id: 1,
      name: "produto1",
      price: "392,00",
    },
    {
      id: 2,
      name: "produto2",
      price: "41,00",
    },
    {
      id: 3,
      name: "produto3",
      price: "63,00",
    },
    {
      id: 4,
      name: "produto4",
      price: "21,00",
    },
    {
      id: 5,
      name: "produto5",
      price: "62,00",
    },
    {
      id: 6,
      name: "produto6",
      price: "123,00",
    },
    {
      id: 7,
      name: "produto7",
      price: "65,00",
    },
    {
      id: 8,
      name: "produto8",
      price: "83,00",
    },
    {
      id: 9,
      name: "produto9",
      price: "49,00",
    },
    {
      id: 10,
      name: "produto10",
      price: "423,00",
    },
    {
      id: 11,
      name: "produto11",
      price: "18,00",
    },
    {
      id: 12,
      name: "produto12",
      price: "194,00",
    },
  ];
  const productsSelecteds: Array<IProductSelected> = [{}];
  function addProductToCar(
    id: number,
    name: string,
    value: string,
    quantity: number
  ) {
    let index = productsSelecteds.findIndex((value) => value.id == id);
    if (index < 0) {
      productsSelecteds.push({
        id: id,
        name: name,
        value: value,
        quantity: quantity,
      });
      carContextToggleTotal();
      console.log(productsSelecteds);
    }
  }

  return (
    <>
      <Layout props={"Home"}>
        <div className="flex flex-col gap-12">
          {/* Principal card */}
          <div className="flex flex-col gap-10 py-10 px-[3%] rounded-xl bg-[#8EEDC7]">
            {/* Informations banner */}
            <h3 className="text-2xl font-bold phones:text-center phones:text-base">
              Olá, somos o E-commerce! Somos 100% nacional e o maior revendedor
              de produtos eletrônicos do país!
            </h3>
            <p className="text-xl phones:text-center phones:text-base">
              Contate nossos revendedores pelo núnero: <br />
              (84) 99999-9999
            </p>

            {/* Buy now button */}
            <a href="#products">
              <button className="w-40 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-500 phones:mx-auto">
                Comprar agora
              </button>
            </a>
          </div>

          {/* Products */}
          <section className="flex flex-col gap-10 phones:w-full" id="products">
            <h1 className="font-bold text-2xl phones:text-center">
              Confira nossos produtos
            </h1>

            <div className="flex flex-wrap gap-3 items-center w-full responsive:justify-center">
              {produtos.map((product, key) => (
                <Card
                  key={key}
                  className="w-[315px] shadow-md rounded-2xl"
                  hoverable
                  cover={
                    <Link href={`/produto/${product.id}`}>
                      <Image
                        className="w-full h-[200px] object-cover object-center responsive:h-fit"
                        alt="example"
                        src={`/images/card${product.id}.jpg`}
                        width={500}
                        height={500}
                      />
                    </Link>
                  }
                >
                  <Meta
                    title={
                      <div className="flex justify-between">
                        <p className="font-bold">{product.name}</p>
                        <p>R${product.price}</p>
                      </div>
                    }
                    description="Lorem ipsum dollor at amet ipsum dollor lorem"
                  />
                  <div className="flex flex-row justify-between items-center pt-[5%] text-xs">
                    {/* Item in car */}
                    <div>
                      <p className="text-white bg-[#27AB83] rounded-xl px-2">
                        Item no carrinho
                      </p>
                    </div>
                    {/* Add to car */}
                    <div
                      className="flex items-center gap-[1vh] hover:text-blue-700"
                      onClick={() => {
                        addProductToCar(
                          product.id,
                          product.name,
                          product.price,
                          1
                        );
                      }}
                    >
                      <p>
                        <span></span>
                        Adicionar ao carrinho
                      </p>
                      <BsCart2 />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
