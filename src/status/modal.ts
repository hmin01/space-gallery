import { create } from "zustand";

interface Display {
  show: boolean,
  setShow: (value: boolean) => void
}

export const useDisplayMainModal = create<Display>((set) => ({
  show: true,
  setShow: (value: boolean) => set({ show: value })
}))

export const useDisplayInfoModal = create<Display>((set) => ({
  show: false,
  setShow: (value: boolean) => set({ show: value })
}));