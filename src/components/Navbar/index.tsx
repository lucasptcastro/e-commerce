import Link from "next/link";
import React from "react";

const Index: React.FC = () => {
  return (
    <div className="fixed flex justify-between px-[15.5%] py-[0.3%] text-[1.5vh] bg-textBlue text-white w-full z-50 phones:py-0 phones:px-7 responsive:px-[4%]">
      <p className="phones:hidden">(84)99999-9999</p>
      <p>Só hoje, frete grátis para todo o Brasil</p>
      <Link href="https://lucasptcastro.github.io/links/" target="_blank">
        <p>Redes sociais</p>
      </Link>
    </div>
  );
};

export default Index;
