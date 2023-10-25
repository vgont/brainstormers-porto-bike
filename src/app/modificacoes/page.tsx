"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import BikeComplement from "../components/BikeComplement";

export default function ModificacoesBike() {
  const [isModified, setIsModified] = useState(false);
  const [haveAcessory, setHaveAcessory] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Title>{"Sua bike possui"}</Title>
      <div className="flex flex-col space-x-2">
        <BikeComplement
          complement="Modificações"
          onclick={() => setIsModified(!isModified)}
        />
        <BikeComplement
          complement="Acessórios"
          onclick={() => setHaveAcessory(!haveAcessory)}
        />
      </div>
      <Footer pathUrlBack="/tipo" pathUrlNext="/documentos" />
    </main>
  );
}
