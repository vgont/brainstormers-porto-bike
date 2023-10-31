import { persist } from "zustand/middleware";
import { create } from "zustand";

interface IAllValidated {
  isAllValidated: boolean;
  setIsAllValidated: (isAllValidated: boolean) => void;
}

const useAllValidatedStore = create(
  persist<IAllValidated>(
    (set) => ({
      isAllValidated: false,

      setIsAllValidated: (isAllValidated) =>
        set({ isAllValidated: isAllValidated }),
    }),
    { name: "allDocValidated" }
  )
);

export default useAllValidatedStore;
