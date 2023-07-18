import { create } from "zustand";

interface CurrentPhotoId {
  id: number;
  setId: (id: number) => void
}

export const setCurrentPhotoTimestamp = create<CurrentPhotoId>((set) => ({
  id: 0,
  setId: (id: number) => set({ id })
}))