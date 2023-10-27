"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import BikeComplement from "../components/BikeComplement";
import useBikeStore from "../stores/useBikeStore";

export default function ModificacoesBike() {
  const { isModified, setIsModified } = useBikeStore();
  const { haveAcessory, setHaveAcessory } = useBikeStore();

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
