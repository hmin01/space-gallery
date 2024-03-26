// Component
import PictureInfoSection from "./PictureInfoSection";
// Type
import type { PictureInfoData } from "@/types/picture";

export default function PictureInfo({ explanation, title }: PictureInfoData) {
  return <PictureInfoSection title={title}>{explanation}</PictureInfoSection>;
}
