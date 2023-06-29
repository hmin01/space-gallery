// API
import { getPictures } from "../../../servers/picture/api";
// Component
import PictureGallery from "../components/organisms/PictureGallery";

export default async function Page(): Promise<JSX.Element> {
  // 데이터 조회
  const data = await getPictures();

  return (
    <PictureGallery items={data} />
  );
}