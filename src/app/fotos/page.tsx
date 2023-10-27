"use client";

import FileUploader from "../components/FileUploader";
import Header from "../components/Header";
import Title from "../components/Title";

export default function FotosBike() {
  return (
    <main className="flex flex-col justify-center items-center">
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
    </main>
  );
}
