// Component
import { Picture } from "@components";
import PictureModal from "../PictureModal";
import Background from "./Background";
// Type
import type { PictureInfo } from "@/types/picture";

export default function Viewer({ dataUrl, url }: PictureInfo) {
  return (
    <>
      <Background dataUrl={dataUrl} />
      <PictureModal>
        <Picture dataUrl={dataUrl} src={url} />
      </PictureModal>
    </>
  );
}
