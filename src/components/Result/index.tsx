import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";

const App: React.FC = () => (
  <Result
    status="success"
    title="Compra realizada com sucesso!"
    subTitle="Número da ordem: 2017182818828182881 Você receberá em seu e-mail a NF da compra"
    extra={[
      <Button type="default" key="console">
        <Link href="/">Voltar ao início</Link>
      </Button>,
    ]}
  />
);

export default App;
