"use client";

import { useState } from "react";
import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import useBikeStore from "../stores/useBikeStore";
import { useRouter } from "next/navigation";

export default function FotosBike() {
  const [isValidated, setIsValidated] = useState();
  const { setAllDefaultState } = useBikeStore();

  const router = useRouter();

  const handleSubmit = () => {
    setAllDefaultState();
    router.push("/");
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Title>{"Anexe as seguintes fotos da bike:"}</Title>
      <div className="mt-20 flex flex-col gap-28">
        <FileUploader idName="bikeLeft" pathImageExample="/images/bikeLeft.jpg">
          {"Lado esquerdo"}
        </FileUploader>
        <FileUploader
          idName="bikeRight"
          pathImageExample="/images/bikeRight.jpg"
        >
          {"Lado direito"}
        </FileUploader>
      </div>
      <button
        className="mt-16 bg-blue-600 text-white px-5 py-2 rounded"
        onClick={handleSubmit}
      >
        {"Finalizar"}
      </button>
      {"Por enquanto só reseta o localStorage"}
      <Footer hideArrowNext pathUrlBack="/documentos" />
    </main>
  );
}
