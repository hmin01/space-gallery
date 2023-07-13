// Component
import { PictureCard } from "@/components/molecules/Card";
import List from "@/components/organisms/List";
// Type
import type { PictureInfo } from "@/types/picture";

export default function Gallery({ items }: { items?: PictureInfo[] }): JSX.Element {
  return (
    <div className="bg-black min-h-screen p-4">
      <List>
        {items?.map((info: PictureInfo): React.ReactNode => (
          <PictureCard key={info.id} info={info} />
        ))}
      </List>
    </div>
  );
}