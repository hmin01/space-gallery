// API
import { getPhotoInfo } from "@/apis/photo";
// Component
import Viewer from "@/components/templates/Viewer";

interface PageProps {
  params: {
    timestamp: string
  }
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  // 파라미터 추출
  const { timestamp } = params;

  // 사진 정보 조회
  const info = await getPhotoInfo(Number(timestamp));

  return (
    <Viewer info={info} />
  );
}