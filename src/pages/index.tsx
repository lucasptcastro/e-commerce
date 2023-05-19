"use client";
// Default
import Image from "next/image";
import Link from "next/link";
import React from "react";
// Components
import Layout from "./layout";
import { useCartContext } from "../context/CartContext";
import { getAllProducts } from "../lib/products";
// Icons
import { BsCart2 } from "react-icons/bs";
// AntDesign
import { Card } from "antd";
const { Meta } = Card;

export default function Home() {
  // useContext
  const cartContext: any = useCartContext();
  const productsInCart = cartContext[1];
  const addProductToCart = cartContext[2];

  // products
  const products = getAllProducts();
  const verifyProductInCart = (id: number, tag: string) => {
    let index = productsInCart
      .slice(1)
      .findIndex((value: any) => value.id == id);

    if (tag == "p") {
      if (index > -1) {
        return "block";
      } else {
        return "hidden";
      }
    } else {
      if (index > -1) {
        return "hidden";
      } else {
        return "block";
      }
    }
  };

  return (
    <Layout props={"Home"}>
      <div className="flex flex-col gap-12">
        {/* Principal card */}
        <div className="flex flex-col gap-10 py-10 px-[3%] rounded-xl text-white bg-principalCard">
          {/* Informations banner */}
          <h3 className="text-2xl font-bold phones:text-center phones:text-base">
            Olá, somos a LP Inovações Tecnológicas, o maior e-commerce de
            tecnologia no país!
          </h3>
          <p className="text-xl phones:text-center phones:text-base">
            Contate-nos através do número: (84) 99999-9999
          </p>

          {/* Buy now button */}
          <a href="#products">
            <button className="w-40 h-10 rounded-xl bg-white text-textColor hover:scale-105 hover:delay-100 phones:mx-auto">
              Comprar agora
            </button>
          </a>
        </div>

        {/* Products Section*/}
        <section className="flex flex-col gap-10 phones:w-full" id="products">
          <h1 className="font-bold text-2xl phones:text-center">
            Confira nossos produtos
          </h1>

          {/* Products */}
          <div className="flex flex-wrap gap-3 items-center w-full justify-center">
            {products.map((product, key) => (
              <Card
                key={key}
                className="w-[315px] shadow-md rounded-2xl"
                hoverable
                cover={
                  <Link href={`/produto/${product.id}`}>
                    <Image
                      className="w-full h-[200px] object-cover object-center responsive:h-fit"
                      alt="example"
                      src={`/images/product${product.id}.jpg`}
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
                      <p>
                        R$
                        {product.price.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  }
                  description={product.description}
                />
                <div className="flex flex-row justify-between items-center pt-[5%] text-xs">
                  {/* Item in car */}
                  <div>
                    <p
                      id={`paragraphItemInCar${product.id}`}
                      className={`text-white bg-colorBlueHover rounded px-2 ${verifyProductInCart(
                        product.id,
                        "p"
                      )}`}
                    >
                      Item no carrinho
                    </p>
                  </div>
                  {/* Add to car */}
                  <div
                    id={`divAddToCar${product.id}`}
                    className={`flex items-center gap-[1vh] hover:text-textBlue ${verifyProductInCart(
                      product.id,
                      "div"
                    )}`}
                    onClick={() => {
                      addProductToCart(
                        product.id,
                        product.name,
                        product.price,
                        1,
                        `/images/card${product.id}.jpg`
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
  );
}
