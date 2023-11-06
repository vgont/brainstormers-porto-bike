"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import Title from "../../components/Title";
import useAllValidatedStore from "../../stores/useAllValidatedStore";
import useBikeStore from "../../stores/useBikeStore";
import { useState, useEffect } from "react";

export default function DocumentosBike() {
  const {
    category,
    serialNumber,
    age,
    price,
    brand,
    model,
    setSerialNumber,
    setAge,
    setPrice,
    setBrand,
    setModel,
  } = useBikeStore();

  const { isAllValidated, setIsAllValidated } = useAllValidatedStore();

  const [serialNumberState, setSerialNumberState] = useState("");
  const [ageState, setAgeState] = useState<number | null>(null);
  const [priceState, setPriceState] = useState<number | null>(null);
  const [brandState, setBrandState] = useState("");
  const [modelState, setModelState] = useState("");
  const [maxAge] = useState(category === "Elétrica" ? 3 : 8);

  const [isSerialNumberValidated, setSerialNumberIsValidated] = useState(false);
  const [isAgeValidated, setAgeIsValidated] = useState(false);
  const [isPriceValidated, setPriceIsValidated] = useState(false);
  const [isBrandValidated, setBrandIsValidated] = useState(false);
  const [isModelValidated, setModelIsValidated] = useState(false);

  const handleIsAllValidated = () => {
    if (
      isSerialNumberValidated &&
      isAgeValidated &&
      isPriceValidated &&
      isBrandValidated &&
      isModelValidated
    ) {
      setIsAllValidated(true);
      return;
    }
    setIsAllValidated(false);
  };

  useEffect(() => {
    setIsAllValidated(false);
    setSerialNumberState(serialNumber);
    setAgeState(age as number);
    setPriceState(price as number);
    setBrandState(brand);
    setModelState(model);
  }, []);

  //valida serial number
  useEffect(() => {
    setSerialNumber(serialNumberState);
    setIsAllValidated(false);
    if (serialNumberState.length == 13) {
      setSerialNumberIsValidated(true);
      return;
    }
    setSerialNumberIsValidated(false);
  }, [serialNumberState]);

  //valida tempo de uso
  useEffect(() => {
    setAge(ageState as number);
    setIsAllValidated(false);
    if (ageState && ageState >= 0 && ageState <= maxAge) {
      setAgeIsValidated(true);
      return;
    }
    setAgeIsValidated(false);
  }, [ageState]);

  //valida valor
  useEffect(() => {
    setPrice(priceState as number);
    setIsAllValidated(false);
    if (priceState && priceState >= 0 && priceState <= 100000) {
      setPriceIsValidated(true);
      return;
    }
    setPriceIsValidated(false);
  }, [priceState]);

  //valida marca
  useEffect(() => {
    setBrand(brandState);
    setIsAllValidated(false);
    if (brandState) {
      setBrandIsValidated(true);
      return;
    }
    setBrandIsValidated(false);
  }, [brandState]);

  //valida modelo
  useEffect(() => {
    setModel(modelState);
    setIsAllValidated(false);
    if (modelState) {
      setModelIsValidated(true);
      return;
    }
    setModelIsValidated(false);
  }, [modelState]);

  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <Title>{"Informe as especificações da bike:"}</Title>
      <div className="mt-20 flex flex-col gap-12">
        <InputField
          valueInput={serialNumberState}
          isValidated={isSerialNumberValidated}
          placeHolder="(13 digitos)"
          idName="numSerie"
          typeOfInput="text"
          maxLengthOfInput={13}
          setStateFunction={setSerialNumberState}
        >
          {"Número de Série"}
        </InputField>
        <InputField
          valueInput={ageState as number}
          isValidated={isAgeValidated}
          placeHolder={
            category === "Elétrica" ? "0 até 3 anos" : "0 até 8 anos"
          }
          idName="tempoUso"
          typeOfInput="number"
          setStateFunction={setAgeState}
        >
          {"Tempo de uso (em anos)"}
        </InputField>

        <InputField
          idName="valor"
          valueInput={priceState as number}
          isValidated={isPriceValidated}
          placeHolder="ex: 5000"
          typeOfInput="number"
          setStateFunction={setPriceState}
        >
          {"Preço (em reais)"}
        </InputField>
        <InputField
          valueInput={brandState}
          isValidated={isBrandValidated}
          placeHolder="ex: Caloi"
          idName="marca"
          typeOfInput="text"
          maxLengthOfInput={15}
          setStateFunction={setBrandState}
        >
          {"Marca"}
        </InputField>
        <InputField
          valueInput={modelState}
          isValidated={isModelValidated}
          placeHolder="ex: atacama-f"
          idName="modelo"
          maxLengthOfInput={10}
          typeOfInput="text"
          setStateFunction={setModelState}
        >
          {"Modelo"}
        </InputField>
      </div>
      <button
        className="mt-10 bg-blue-500 text-white px-5 py-2 rounded mb-20"
        onClick={handleIsAllValidated}
      >
        {"Validar"}
      </button>
      <div className=" w-full">
        <Footer
          pathUrlBack="/pages/modificacoes"
          pathUrlNext="/pages/fotos"
          isValidated={isAllValidated}
        />
      </div>
    </main>
  );
}
