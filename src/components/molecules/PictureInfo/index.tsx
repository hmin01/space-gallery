// Component
import PictureInfoSection from "./PictureInfoSection";
// Type
import type { PictureInfoData } from "@/types/picture";

export default function PictureInfo({ explanation, title }: PictureInfoData) {
  return (
    <PictureInfoSection>
      <h3 className="font-semibold text-lg text-white">{title}</h3>
      <p className="text-white">{explanation}</p>
    </PictureInfoSection>
  );
}
