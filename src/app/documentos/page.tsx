"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import InputField from "../components/InputField";
import Title from "../components/Title";
import useBikeStore from "../stores/useBikeStore";

export default function DocumentosBike() {
  const { setSerialNumber, setAge } = useBikeStore();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Title>{"Informe as especificações da bike:"}</Title>
      <div className="mt-20 flex flex-col gap-12">
        <InputField
          idName="numSerie"
          typeOfInput="text"
          maxLengthOfInput={13}
          setStateFunction={setSerialNumber}
        >
          {"Número de Série"}
        </InputField>
        <InputField
          idName="tempoUso"
          typeOfInput="number"
          maxLengthOfInput={1}
          setStateFunction={setAge}
        >
          {"Tempo de uso"}
        </InputField>
      </div>
      <Footer pathUrlBack="/modificacoes" pathUrlNext="/fotos" />
    </main>
  );
}
