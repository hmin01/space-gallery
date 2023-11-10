// Component (Local)
import { PhotoCard } from "./Components";
// Custom hook
import { usePhotos } from "./GalleryContent.hooks";

export default async function GalleryContent() {
  // 데이터 조회 Hook
  const { photos } = await usePhotos();

  return photos.map((elem: any): React.ReactNode => <PhotoCard info={elem} />);
}
