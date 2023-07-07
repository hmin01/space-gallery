// Component
import PictureList from "../organisms/PictureList";
// Type
import { PictureInfo } from "../../../../servers/types/picture";

export default function PictureGallery({ items }: { items?: PictureInfo[] }): JSX.Element {
  return (
    <div className="bg-black min-h-screen p-4">
      <PictureList items={items ? items : []} />
    </div>
  );
}