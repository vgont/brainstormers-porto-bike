"use client";

import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

export default function DocumentosBike() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Title>{"Anexe os seguintes documentos da bike:"}</Title>
      <div className="mt-20 flex flex-col gap-28">
        <FileUploader idName="nota" pathImageExample="/images/exampleNF.jpg">
          {"Nota fiscal"}
        </FileUploader>
        <FileUploader
          idName="numSerie"
          pathImageExample="/images/exampleNumSerie.jpg"
        >
          {"N.º de série"}
        </FileUploader>
      </div>
      <Footer pathUrlBack="/modificacoes" pathUrlNext="/fotos" />
    </main>
  );
}
