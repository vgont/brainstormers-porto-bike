import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IBikeProps {
  type: string;
  isModified: boolean;
  haveAcessory: boolean;
  quantityOfModifies: number | null;
  quantityOfAcessories: number | null;
  setType: (type: string) => void;
  setIsModified: (isModified: boolean) => void;
  setHaveAcessory: (haveAcessory: boolean) => void;
  setQuantityOfModifies: (quantity: number) => void;
  setQuantityOfAcessories: (quantity: number) => void;
}

const useBikeStore = create(
  persist<IBikeProps>(
    (set) => ({
      type: "",
      isModified: false,
      haveAcessory: false,
      quantityOfModifies: null,
      quantityOfAcessories: null,

      setType: (type: string) => set(() => ({ type: type })),

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
