import { create } from "zustand";

interface searchtype {
  number: number;
  setNumber: (value: number) => void;
}

export const useSearch = create<searchtype>((set) => ({
  number: 0,
  setNumber: (value: number) => set(() => ({ number: value })),
}));

interface showmadal {
  showmadal: boolean;
  setshowmadal: (value: boolean) => void;
}

export const useshowmadal = create<showmadal>((set) => ({
  showmadal: false,
  setshowmadal: (value: boolean) => set(() => ({ showmadal: value })),
}));
