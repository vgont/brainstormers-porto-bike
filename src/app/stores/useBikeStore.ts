import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IBikeProps {
  type: string;
  serialNumber: string;
  age: number;
  isElectric: boolean;
  powerInWatts: number | null;
  quantityOfModifies: number | null;
  quantityOfAcessories: number | null;
  setType: (type: string) => void;
  setSerialNumber: (serialNumber: string) => void;
  setAge: (age: number) => void;
  setPowerInWatts: (watts: number) => void;
  setisElectric: (isElectric: boolean) => void;
  setQuantityOfModifies: (quantity: number) => void;
  setQuantityOfAcessories: (quantity: number) => void;
}

const useBikeStore = create(
  persist<IBikeProps>(
    (set) => ({
      type: "",
      serialNumber: "",
      age: 0,
      isElectric: false,
      powerInWatts: null,
      quantityOfModifies: null,
      quantityOfAcessories: null,

      setType: (type) => set(() => ({ type: type })),

      setSerialNumber: (serialNumber: string) =>
        set(() => ({ serialNumber: serialNumber })),

      setAge: (age) => set(() => ({ age: age })),

      setisElectric: (isElectric) => set(() => ({ isElectric: isElectric })),

      setPowerInWatts: (watts) => set(() => ({ powerInWatts: watts })),

      setQuantityOfModifies: (quantity) =>
        set(() => ({ quantityOfModifies: quantity })),

      setQuantityOfAcessories: (quantity) =>
        set(() => ({ quantityOfAcessories: quantity })),
    }),
    {
      name: "CreateBikeIntent",
    }
  )
);

export default useBikeStore;
