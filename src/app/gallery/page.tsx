// API
import { getPictures } from "../../../servers/picture/api";
// Component
import { PictureList } from "../components/molecules/PictureList";

export default async function Page(): Promise<JSX.Element> {
  // 데이터 조회
  const data = await getPictures();

  return (
    <div>
      <PictureList items={data} />
    </div>
  );
}