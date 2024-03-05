// // API
// import { getPhotoInfo, getTimestampList } from "@/apis/photo";
import { getPicture } from "@/apis/picture";
import { Viewer } from "@components";
// // Component
// import Viewer from "@/components/templates/Viewer";

// export async function generateStaticParams() {
//   // 사진 목록 조회
//   const data: number[] = await getTimestampList();
//   // 타임 스탬프 목록 반환
//   return data.map((elem: number): string => elem.toString());
// }

interface queryParams {
  params: { timestamp: string };
}

export default async function Page({
  params,
}: queryParams): Promise<JSX.Element> {
  // 파라미터 추출
  const { timestamp } = params;

  // 데이터 조회
  const data = await getPicture(Number(timestamp));

  return <Viewer {...data} />;
}
