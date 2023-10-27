"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import BikeTypes from "../components/BikeTypes";

export default function TipoBike() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Title>{"Qual tipo da sua bicicleta?"}</Title>
      <BikeTypes bikeTypes={["Tradicional", "Performance", "Mountain Bike"]} />
      <Footer pathUrlNext="/modificacoes" hideArrowBack />
    </main>
  );
}
