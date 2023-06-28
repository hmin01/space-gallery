// API
import { getPictureInfo } from "../../../../../servers/picture/api";
// Component
import PictureCard from "@/app/components/molecules/PictureCard";

export default async function Page({ params }: { params: { date: string } }): Promise<JSX.Element> {
  // 데이터 조회
  const data = await getPictureInfo(params.date);

  return (
    <div>
      <PictureCard info={data} />
    </div>
  );
}