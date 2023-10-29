import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IBikeProps {
  type: string;
  serialNumber: string;
  isElectric: boolean;
  isModified: boolean;
  haveAcessory: boolean;
  quantityOfModifies: number | null;
  quantityOfAcessories: number | null;
  setType: (type: string) => void;
  setSerialNumber: (serialNumber: string) => void;
  setisElectric: (isElectric: boolean) => void;
  setIsModified: (isModified: boolean) => void;
  setHaveAcessory: (haveAcessory: boolean) => void;
  setQuantityOfModifies: (quantity: number) => void;
  setQuantityOfAcessories: (quantity: number) => void;
}

const useBikeStore = create(
  persist<IBikeProps>(
    (set) => ({
      type: "",
      serialNumber: "",
      isElectric: false,
      isModified: false,
      haveAcessory: false,
      quantityOfModifies: null,
      quantityOfAcessories: null,

      setType: (type: string) => set(() => ({ type: type })),

      setSerialNumber: (serialNumber: string) =>
        set(() => ({ serialNumber: serialNumber })),

      setisElectric: (isElectric) => set(() => ({ isModified: isElectric })),

      setIsModified: (isModified) => set(() => ({ isModified: isModified })),

      setHaveAcessory: (haveAcessory) =>
        set(() => ({ haveAcessory: haveAcessory })),

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
