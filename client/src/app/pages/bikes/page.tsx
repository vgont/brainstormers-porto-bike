"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { bike } from "@/app/types/types";
import Bike from "@/app/components/Bike";
import useBikeStore from "@/app/stores/useBikeStore";

export default function Bikes() {
  const { idClient } = useBikeStore();
  const [allClientBikes, setlAllClientBikes] = useState<bike[]>([]);
  const [loadingBikes, setLoadingBikes] = useState(true);
  const [idClientState] = useState(idClient);

  const fetchClientBikes = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/bikes/${idClientState}`
      );
      console.log(idClientState);
      if (response.ok) {
        const data: bike[] = await response.json();
        console.log(data);
        setlAllClientBikes(data);
      } else {
        console.error(
          "---Failed to fetch data---: ",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoadingBikes(false);
    }
  };

  useEffect(() => {
    fetchClientBikes();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <Title>Suas bikes:</Title>

      {!loadingBikes && (
        <div className="flex flex-row items-center justify-center mt-20 w-full flex-wrap">
          {allClientBikes.length > 0 ? (
            allClientBikes.map((bike) => (
              <Bike bike={bike} key={bike.serialNumber} />
            ))
          ) : (
            <p className="font-semibold text-2xl">
              {"Você não possui bicicletas cadastradas"}
            </p>
          )}
        </div>
      )}
    </main>
  );
}
