import React from "react";

// Components
import Header from "../Header/index";

const Index: React.FC = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="flex flex-col px-[10%] bg-[#EFFCF6] h-max phones:justify-center">
        {children}
      </main>
    </>
  );
};

export default Index;
