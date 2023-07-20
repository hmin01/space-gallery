// Component
import { PhotoCard } from "@/components/molecules/Card";
import List from "@/components/organisms/List";
// Type
import type { PhotoInfoProps, ProcessedPhotoProps } from "@/types/photo";

/** [Properties] For Gallery */
interface GalleryProps {
  items?: PhotoInfoProps[]
}

export default function Gallery({ items }: GalleryProps): JSX.Element {
  // 사진 컴포넌트 목록 생성
  const photos: ProcessedPhotoProps[] = items ? items.map((info: PhotoInfoProps): ProcessedPhotoProps => ({
    component: (<PhotoCard info={info} />),
    id: Number(info.id)
  })) : [];

  return (
    <div className="bg-black min-h-screen p-4">
      <List photos={photos} />
    </div>
  );
}