// API
import { getPictureInfo } from "@/apis/picture";
// Component
import PictureInfo from "@/components/templates/PictureInfo";

export default async function Page({ params }: { params: { date: string } }): Promise<JSX.Element> {
  // 데이터 조회
  const data = await getPictureInfo(params.date);

  return (
    <PictureInfo info={data} />
  );
}