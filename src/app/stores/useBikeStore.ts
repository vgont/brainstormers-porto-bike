import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IBikeProps {
  type: string;
  serialNumber: string;
  brand: string;
  model: string;
  price: number | null;
  age: number | null;
  isElectric: boolean;
  powerInWatts: number | null;
  quantityOfModifies: number | null;
  quantityOfAcessories: number | null;
  setType: (type: string) => void;
  setSerialNumber: (serialNumber: string) => void;
  setBrand: (brand: string) => void;
  setModel: (model: string) => void;
  setPrice: (price: number) => void;
  setAge: (age: number) => void;
  setPowerInWatts: (watts: number | null) => void;
  setIsElectric: (isElectric: boolean) => void;
  setQuantityOfModifies: (quantity: number) => void;
  setQuantityOfAcessories: (quantity: number) => void;
  setAllDefaultState: () => void;
}

const useBikeStore = create(
  persist<IBikeProps>(
    (set) => ({
      type: "",
      brand: "",
      model: "",
      serialNumber: "",
      price: null,
      age: null,
      isElectric: false,
      powerInWatts: null,
      quantityOfModifies: null,
      quantityOfAcessories: null,

      setType: (type) => set(() => ({ type: type })),

      setSerialNumber: (serialNumber) =>
        set(() => ({ serialNumber: serialNumber })),

      setBrand: (brand) => set(() => ({ brand: brand })),

      setModel: (model) => set(() => ({ model: model })),

      setPrice: (price) => set(() => ({ price: price })),

      setAge: (age) => set(() => ({ age: age })),

      setIsElectric: (isElectric) => set(() => ({ isElectric: isElectric })),

      setPowerInWatts: (watts) => set(() => ({ powerInWatts: watts })),

      setQuantityOfModifies: (quantity) =>
        set(() => ({ quantityOfModifies: quantity })),

      setQuantityOfAcessories: (quantity) =>
        set(() => ({ quantityOfAcessories: quantity })),

      setAllDefaultState: () =>
        set(() => ({
          type: "",
          brand: "",
          model: "",
          serialNumber: "",
          price: null,
          age: null,
          isElectric: false,
          powerInWatts: null,
          quantityOfModifies: null,
          quantityOfAcessories: null,
        })),
    }),
    {
      name: "BikeInfos",
    }
  )
);

export default useBikeStore;
