"use client";

import { useRouter } from "next/navigation";

import Content from "../../components/Content";
import useBikeStore from "../../stores/useBikeStore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import { postData } from "@/app/api/apiUtils";

export default function Finalizar() {
  const { setAllDefaultState } = useBikeStore();

  const router = useRouter();

  const postBike = async () => {
    const apiUrl = "http://localhost:8080/vistoria/finalizar";
    const bikeData = useBikeStore.getState();

    try {
      const response = await postData(apiUrl, bikeData);
      console.log("POST request successful", response);
    } catch (error) {
      console.error("POST request failed", error);
    }
  };

  const handleSubmit = async () => {
    await postBike();
    setAllDefaultState();
    router.push("/");
  };
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Content>
        <Title>
          {"Agora é só clicar em finalizar e cadastrar sua bicicleta!"}
        </Title>
        <button
          className="my-auto bg-blue-600 text-white px-10 py-4 rounded"
          onClick={handleSubmit}
        >
          {"Finalizar"}
        </button>
      </Content>
      <Footer pathUrlBack="/pages/fotos" />
    </main>
  );
}
