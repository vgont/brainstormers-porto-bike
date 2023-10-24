"use client";

import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

export default function DocumentosBike() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <Title>{"Anexe os seguintes documentos da bike:"}</Title>
      <div className="mt-20 flex flex-col gap-28">
        <FileUploader idName="nota">{"Nota fiscal"}</FileUploader>
        <FileUploader idName="numSerie">{"N.º de série"}</FileUploader>
      </div>

      <Footer pathUrlBack="/modificacoes" pathUrlNext="/" />
    </main>
  );
}
