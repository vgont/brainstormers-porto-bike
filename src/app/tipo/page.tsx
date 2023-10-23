"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import BikeTypes from "../components/BikeTypes";

export default function TipoBike() {
  const bikeTypes: string[] = ["Tradicional", "Performance", "Mountain Bike"];

  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <Title>{"Qual tipo da sua bicicleta?"}</Title>
      <BikeTypes bikeTypes={bikeTypes} />
      <Footer pathUrlNext="/modificacoes" hideArrowBack />
    </main>
  );
}
