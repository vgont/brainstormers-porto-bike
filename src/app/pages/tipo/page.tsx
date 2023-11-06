"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import BikeTypes from "../../components/BikeTypes";
import { useState, useEffect } from "react";
import useBikeStore from "../../stores/useBikeStore";
import Content from "../../components/Content";

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
    <main className="flex flex-col h-screen">
      <Header />
      <Content>
        <Title>{"Qual tipo da sua bicicleta?"}</Title>
        <BikeTypes bikeTypes={["Urbana", "Performance", "Mountain Bike"]} />
      </Content>
      <Footer
        pathUrlNext="/pages/eletrica"
        hideArrowBack
        isValidated={isValidated}
      />
    </main>
  );
}
