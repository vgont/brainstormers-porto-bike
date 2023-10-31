"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import BikeComplement from "../components/BikeComplement";
import { useState } from "react";

export default function ModificacoesBike() {
  const [isModified, setIsModified] = useState(false);
  const [haveAcessory, setHaveAcessory] = useState(false);

  return (
    <main className="flex flex-col items-center h-screen">
      <Header />
      <Title>{"Sua bike possui"}</Title>
      <div className="flex flex-col space-x-2 mb-auto">
        <BikeComplement
          complement="Modificações"
          isToggled={isModified}
          setIsToggled={setIsModified}
        />
        <BikeComplement
          complement="Acessórios"
          isToggled={haveAcessory}
          setIsToggled={setHaveAcessory}
        />
      </div>
      <Footer pathUrlBack="/eletrica" pathUrlNext="/documentos" isValidated />
    </main>
  );
}
