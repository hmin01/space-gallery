// API
import { getPictures } from "@/apis/picture";
// Component
import PictureCard from "./_components/PictureCard";
// Type
import type { PictureInfo } from "@/types/picture";

export default async function Page() {
  // 데이터 조회
  const pictures = await getPictures();

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-w-[1960px] mx-auto">
      {pictures.map(
        (elem: PictureInfo): React.ReactNode => (
          <PictureCard {...elem} key={elem.id} />
        )
      )}
    </div>
  );
}
