// Component
import PictureList from "../organisms/PictureList";
import PicturePopup from "../organisms/PicturePopup";
// Type
import { PictureInfo } from "../../../../servers/picture/type";

export default function PictureGallery({ items }: { items?: PictureInfo[] }): JSX.Element {
  return (
    <>
      <PictureList items={items ? items : []} />
      <PicturePopup />
    </>
  );
}