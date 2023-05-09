"use client";
// Next
import Image from "next/image";
// Components
import Header from "../components/Header";
// Icons
import { BsCart2 } from "react-icons/bs";
// AntDesign
import { Button, Row, Col, Card } from "antd";

export default function Produto() {
  return (
    <>
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Main */}
      <div className="flex flex-col px-[10%] bg-[#EFFCF6] h-max phones:justify-center">
        {/* Logo + Carrinho */}
        <div className="flex flex-row justify-between items-center py-20 px-[7%] phones:px-0">
          <a href="#" className="text-3xl text-black font-bold phones:text-xl">
            E-commerce
          </a>
          <div className="flex flex-row items-center gap-2">
            <BsCart2 className="text-3xl phones:text-xl" />
            <p className="phones:text-sm">Carrinho</p>
          </div>
        </div>
      </div>
    </>
  );
}
