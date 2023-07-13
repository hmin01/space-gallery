// API
import { getPictures } from "@/apis/picture";
// Component
import Gallery from "@/components/templates/Gallery";

export default async function Page(): Promise<JSX.Element> {
  // 데이터 조회
  const data = await getPictures();

  return (
    <Gallery items={data} />
  );
}