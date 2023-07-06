// Component
import { ClickableBox } from "../molecules/ClickableBox";
import PictureCard from "../molecules/PictureCard";
// Type
import type { PictureInfo } from "../../../../servers/picture/type";

export default function PictureList({ items }: { items: PictureInfo[] }): JSX.Element {
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
      {items.map((info: PictureInfo): React.ReactNode => (
        <ClickableBox key={info.id} info={info}>
          <PictureCard blurDataURL={info.dataUrl} title={info.title} src={info.url} />
        </ClickableBox>
      ))}
    </div>
  );
}