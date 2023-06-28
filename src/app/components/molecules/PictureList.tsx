// Component
import Link from "next/link";
import { Picture } from "../atoms/Picture";
// Type
import type { PictureImage } from "../../../../servers/picture/type";

export const PictureList: React.FC<any> = ({ items }: { items: PictureImage[] }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((info: PictureImage): React.ReactNode => (
        <Link href={`/gallery/info/${info.date}`}>
          <Picture info={info} />
        </Link>
      ))}
    </div>
  );
}