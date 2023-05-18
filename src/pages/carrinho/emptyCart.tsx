"use client";
// React
import React from "react";
// Icons
import { BsCart2 } from "react-icons/bs";

export default function EmptyCar() {
  return (
    <div className="flex justify-center items-center gap-[1vh] text-3xl font-mono w-full text-gray-600">
      <BsCart2 />
      <h1>CARRINHO VAZIO</h1>
    </div>
  );
}
