"use client";

import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

export default function FotosBike() {
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
      <button className="mt-10">submit</button>
      <Footer hideArrowNext pathUrlBack="/documentos" />
    </main>
  );
}
