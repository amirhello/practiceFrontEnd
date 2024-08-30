import { create } from "zustand";

export interface zustandUserType {
  name: string;
  age: number;
  setName: (name: string) => void;
  setAge: (age: number) => void;
  incriseAge: (age: number) => void;
  decriseAge: (age: number) => void;
}

export const useZustand = create<zustandUserType>((set) => ({
  name: "",
  age: 0,
  setName: (name) => set(() => ({ name: name })),
  incriseAge: (num) => set((state) => ({ age: state.age + num })),
  setAge: (age) => set(() => ({ age: age })),
  decriseAge: (num) => set((state) => ({ age: state.age - num })),
}));
