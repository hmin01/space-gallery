"use client"

// API
// import { getPictureInfo } from "@/apis/picture";
// React query
import { useQuery } from "react-query";
// Route
import { useParams } from "next/navigation";
//  
import axios from "axios";

export default async function PictureInfo(): Promise<JSX.Element> {
  // 파라미터 추출
  const { date } = useParams();
  // 데이터 조회
  // const { data } = useQuery(["picture", date], async () => await getPictureInfo(date));
  const { data } = useQuery({ queryKey: ["picture", date], queryFn: () => axios.get("https://16wyp5ld8g.execute-api.ap-northeast-2.amazonaws.com/Production/picture/2023-06-22") });

  return (
    <div className="bg-black h-screen w-screen">
      HI
    </div>
  );
}