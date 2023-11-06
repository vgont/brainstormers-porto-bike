import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IBikeProps {
  idClient: number | null;
  type: string;
  serialNumber: string;
  brand: string;
  model: string;
  price: number | null;
  age: number | null;
  isElectric: boolean;
  category: string;
  powerInWatts: number | null;
  quantityOfModifies: number | null;
  quantityOfAcessories: number | null;
  setIdClient: (id: number) => void;
  setType: (type: string) => void;
  setSerialNumber: (serialNumber: string) => void;
  setBrand: (brand: string) => void;
  setModel: (model: string) => void;
  setPrice: (price: number) => void;
  setAge: (age: number) => void;
  setPowerInWatts: (watts: number | null) => void;
  setIsElectric: (isElectric: boolean) => void;
  setCategory: (category: string) => void;
  setQuantityOfModifies: (quantity: number) => void;
  setQuantityOfAcessories: (quantity: number) => void;
  setAllDefaultState: () => void;
}

const useBikeStore = create(
  persist<IBikeProps>(
    (set) => ({
      idClient: 1,
      type: "",
      brand: "",
      model: "",
      serialNumber: "",
      price: null,
      age: null,
      isElectric: false,
      category: "",
      powerInWatts: null,
      quantityOfModifies: null,
      quantityOfAcessories: null,

      setIdClient: (id) => set(() => ({ idClient: id })),

      setType: (type) => set(() => ({ type: type })),

      setSerialNumber: (serialNumber) =>
        set(() => ({ serialNumber: serialNumber })),

      setBrand: (brand) => set(() => ({ brand: brand })),

      setModel: (model) => set(() => ({ model: model })),

      setPrice: (price) => set(() => ({ price: price })),

      setAge: (age) => set(() => ({ age: age })),

      setIsElectric: (isElectric) => set(() => ({ isElectric: isElectric })),

      setCategory: (category) => set(() => ({ category: category })),

      setPowerInWatts: (watts) => set(() => ({ powerInWatts: watts })),

      setQuantityOfModifies: (quantity) =>
        set(() => ({ quantityOfModifies: quantity })),

      setQuantityOfAcessories: (quantity) =>
        set(() => ({ quantityOfAcessories: quantity })),

      setAllDefaultState: () =>
        set(() => ({
          idClient: 1,
          type: "",
          brand: "",
          model: "",
          serialNumber: "",
          price: null,
          age: null,
          isElectric: false,
          category: "",
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
