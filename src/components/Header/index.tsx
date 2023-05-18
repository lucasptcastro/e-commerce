"use client";
// Next
import Link from "next/link";
import React from "react";

// Components
import { useCartContext } from "../../context/CartContext";

// Icons
import { BsFillCartFill } from "react-icons/bs";
import { Breadcrumb } from "antd";

interface IHome {
  breadcrumb: string;
}

const Index: React.FC<IHome> = (props) => {
  const cartContext = useCartContext();
  const totalProcutsInCart: any = cartContext[0];

  return (
    <>
      {/* Logo + Car */}
      <div className="flex flex-row justify-between items-center">
        {/* Company title + breadcrumb */}
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
            items={[
              { title: <Link href="/">E-commerce</Link> },
              { title: props.breadcrumb },
            ]}
          />
        </div>

        {/* Link + Car */}
        <Link href="/carrinho" className="flex flex-row items-center gap-5">
          <div className="flex justify-center items-center text-center">
            {/* Icon */}
            <BsFillCartFill
              className="absolute text-4xl phones:text-3xl"
              color="#014D40"
            />

            {/* Car with counter */}
            <span className="absolute text-[1.8vh] text-white phones:text-sm">
              {totalProcutsInCart}
            </span>
          </div>
          <p className="phones:text-sm">Carrinho</p>
        </Link>
      </div>
    </>
  );
};

export default Index;
