// Component
import { ClickablePicture } from "../atoms/Picture";
// Type
import type { PictureInfo } from "../../../../servers/picture/type";

export default function PictureList({ items, onOpen }: { items: PictureInfo[], onOpen: (info: PictureInfo) => void }): JSX.Element {
  return (
    <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 xxl:grid-cols-6">
      {items.map((info: PictureInfo): React.ReactNode => (
        <ClickablePicture info={info} onOpen={onOpen} />
      ))}
    </div>
  );
}