// API
import { getPictureInfo, getTimestampList } from "@/apis/picture";
// Component
import Viewer from "@/components/templates/Viewer";

// export async function generateStaticParams() {
//   // 사진 목록 조회
//   const data: number[] = await getTimestampList();
//   // 타임 스탬프 목록 반환
//   return data.map((elem: number): string => elem.toString());
// }

export default async function Page({ params }: { params: { timestamp: number } }): Promise<JSX.Element> {
  // 데이터 조회
  // const data = await getPictureInfo(params.timestamp);

  // return (
  //   <Viewer info={data} />
  // );

  console.log("params", params)

  return (
    <div>His</div>
  );
}