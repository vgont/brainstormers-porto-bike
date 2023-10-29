"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import InputField from "../components/InputField";
import Title from "../components/Title";
import useBikeStore from "../stores/useBikeStore";

export default function DocumentosBike() {
  const { setSerialNumber } = useBikeStore();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Title>{"Informe as especificações da bike:"}</Title>
      <div className="mt-20 flex flex-col gap-28">
        <InputField idName="numSerie" setStateFunction={setSerialNumber}>
          {"Número de Série"}
        </InputField>
      </div>
      <Footer pathUrlBack="/modificacoes" pathUrlNext="/fotos" />
    </main>
  );
}
