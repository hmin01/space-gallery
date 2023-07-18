// Component
import { PhotoCard } from "@/components/molecules/Card";
import List from "@/components/organisms/List";
// Type
import type { PhotoInfoProps } from "@/types/photo";

/** [Properties] For Gallery */
interface GalleryProps {
  items?: PhotoInfoProps[]
}

export default function Gallery({ items }: GalleryProps): JSX.Element {
  return (
    <div className="bg-black min-h-screen p-4">
      <List>
        {items?.map((info: PhotoInfoProps): React.ReactNode => (
          <PhotoCard key={info.id} info={info} />
        ))}
      </List>
    </div>
  );
}