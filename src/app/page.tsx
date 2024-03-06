// API
import { getPictures } from "@/apis/picture";
// Component
import { PictureCard } from "./_components";
// Type
import type { PictureOverData } from "@/types/picture";

export default async function Page() {
  // 데이터 조회
  const pictures = await getPictures();

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 max-w-[1960px] mx-auto p-4">
      {pictures.map(
        (elem: PictureOverData): React.ReactNode => (
          <PictureCard {...elem} key={elem.id} />
        )
      )}
    </div>
  );
}
