// Component
import PictureList from "../organisms/PictureList";
import PicturePopup from "../organisms/PicturePopup";
// Type
import { PictureInfo } from "../../../../servers/types/picture";

export default function PictureGallery({ items }: { items?: PictureInfo[] }): JSX.Element {
  return (
    <div className="bg-black min-h-screen p-4">
      <PictureList items={items ? items : []} />
      <PicturePopup />
    </div>
  );
}