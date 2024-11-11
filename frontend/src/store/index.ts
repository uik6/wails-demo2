import { create } from "zustand";

type useStoreType = {
  count: number;
  setCount: (value: number) => void;
};

const useStore = create<useStoreType>()((set) => {
  return {
    count: 0,
    setCount: (value: number) => {
      set({ count: value });
    },
  };
});

export default useStore;
