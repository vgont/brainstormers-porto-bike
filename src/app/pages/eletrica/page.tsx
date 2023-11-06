"use client";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import useBikeStore from "../../stores/useBikeStore";
import InputField from "../../components/InputField";
import Toggle from "../../components/Toggle";
import Content from "../../components/Content";

export default function Eletrica() {
  const {
    isElectric,
    powerInWatts,
    setIsElectric,
    setPowerInWatts,
    setCategory,
  } = useBikeStore();
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    if (!isElectric) {
      setPowerInWatts(null);
      setCategory("Tradicional");
      return;
    }
    setCategory("Eletrica");
  }, [isElectric]);

  useEffect(() => {
    if (powerInWatts && powerInWatts > 0 && powerInWatts <= 250) {
      return setIsValidated(true);
    }
    setIsValidated(false);
  }, [powerInWatts]);

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <Content>
        <Title>{"Sua bike é elétrica?"}</Title>
        <div className="flex flex-col justify-center items-center mt-20 mb-auto space-y-10">
          <Toggle isToggled={isElectric} setIsToggled={setIsElectric} />
          {isElectric && (
            <div className="flex flex-col justify-center items-center gap-10">
              <InputField
                typeOfInput="number"
                idName="eletrica"
                placeHolder="até 250"
                valueInput={powerInWatts as number}
                setStateFunction={setPowerInWatts}
                isValidated={isValidated}
              >
                {"Potência (Watts)"}
              </InputField>
            </div>
          )}
        </div>
      </Content>
      <Footer
        pathUrlBack="/pages/tipo"
        pathUrlNext="/pages/modificacoes"
        isValidated={isElectric ? isValidated : true}
      />
    </main>
  );
}
