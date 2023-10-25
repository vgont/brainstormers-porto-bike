import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IBikeProps {
  category: string;
  isModified: boolean;
  haveAcessory: boolean;
  quantityOfModifies: number | null;
  quantityOfAcessories: number | null;
}

const useBikeStore = create(
  persist<IBikeProps>(
    (set) => ({
      category: "",
      isModified: false,
      haveAcessory: false,
      quantityOfModifies: null,
      quantityOfAcessories: null,

      setCategory: (category: string) => set(() => ({ category: category })),

      setIsModified: (isModified: boolean) =>
        set(() => ({ isModified: isModified })),

      setHaveAcessory: (haveAcessory: boolean) =>
        set(() => ({ haveAcessory: haveAcessory })),

      setQuantityOfModifies: (quantity: number) =>
        set(() => ({ quantityOfModifies: quantity })),

      setQuantityOfAcessories: (quantity: number) =>
        set(() => ({ quantityOfAcessories: quantity })),
    }),
    {
      name: "CreateBikeIntent",
    }
  )
);

export default useBikeStore;
