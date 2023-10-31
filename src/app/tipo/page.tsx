"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import BikeTypes from "../components/BikeTypes";
import { useState, useEffect } from "react";
import useBikeStore from "../stores/useBikeStore";

export default function TipoBike() {
  const [isValidated, setIsValidated] = useState(false);

  const { type } = useBikeStore();

  useEffect(() => {
    if (type.length > 0) {
      setIsValidated(true);
    }
  }, []);

  useEffect(() => {
    if (type.length > 0) {
      setIsValidated(true);
    }
  }, [type]);

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Title>{"Qual tipo da sua bicicleta?"}</Title>
      <BikeTypes bikeTypes={["Urbana", "Performance", "Mountain Bike"]} />
      <Footer pathUrlNext="/eletrica" hideArrowBack isValidated={isValidated} />
    </main>
  );
}
