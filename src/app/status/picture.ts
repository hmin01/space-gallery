import { create } from "zustand";
// Type
import type { PictureInfo } from "../../../servers/types/picture";

interface SelectedPicture {
  info: PictureInfo | null;
  setInfo: (info: PictureInfo | null) => void
}

export const setSelectedInfo = create<SelectedPicture>((set) => ({
  info: null,
  setInfo: (info: PictureInfo | null) => set({ info })
}))