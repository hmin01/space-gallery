// API
import { getPhotos } from "@/apis/photo";
// Component
import Gallery from "@/components/templates/Gallery";

export default async function Page(): Promise<JSX.Element> {
  // 데이터 조회
  const data = await getPhotos();

  return (
    <Gallery items={data} />
  );
}