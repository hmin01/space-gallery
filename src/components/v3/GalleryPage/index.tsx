// API
import { getPhotos } from "@/apis/photo";

export default async function GalleryPage() {
  // 데이터 조회
  const photos = await getPhotos();

  return (
    <div className="bg-black min-h-screen">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[1960px] mx-auto"></div>
    </div>
  );
}
