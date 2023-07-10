// API
import { getPictureInfo } from "@/apis/picture";
// Component
import Viewer from "@/components/templates/Viewer";

export default async function Page({ params }: { params: { timestamp: number } }): Promise<JSX.Element> {
  // 데이터 조회
  const data = await getPictureInfo(params.timestamp);

  return (
    <Viewer info={data} />
  );
}