// API
import { getPictures } from "../../servers/apis/picture";
// Component
import PictureGallery from "./components/templates/PictureGallery";

export default async function Page(): Promise<JSX.Element> {
  // 데이터 조회
  const data = await getPictures();

  return (
    <PictureGallery items={data} />
  );
}