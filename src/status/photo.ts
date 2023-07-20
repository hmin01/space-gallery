import { create } from "zustand";

interface LastViewPhotoId {
  id?: number;
  setId: (id?: number) => void
}

export const setLastViewPhotoId = create<LastViewPhotoId>((set) => ({
  id: undefined,
  setId: (id?: number) => set({ id })
}))