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
            className="text-[170%] text-black font-bold phones:text-3xl"
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
            className="text-[90%]"
          />
        </div>

        {/* Link + Car */}
        <Link href="/carrinho" className="flex flex-row items-center gap-[3vh]">
          <div className="flex justify-center items-center text-center">
            {/* Icon */}
            <BsFillCartFill className="absolute text-4xl responsive:text-[200%] text-textBlue" />

            {/* Car with counter */}
            <span className="absolute text-[100%] text-white responsive:text-[80%]">
              {totalProcutsInCart}
            </span>
          </div>
          <p className="responsive:text-[80%]">Carrinho</p>
        </Link>
      </div>
    </>
  );
};

export default Index;
