import dynamic from "next/dynamic";
// API
import { getPicture } from "@/apis/picture";
// Component
import { Picture } from "@/components/atoms";
import { Background } from "./_components";
const PictureInfo: ComponentType<any> = dynamic(() => import("@/components/molecules").then((m: any) => m.PictureInfo));
const PictureModal: ComponentType<any> = dynamic(() => import("@/components/organisms").then((m: any) => m.PictureModal));
// Type
import type { ComponentType } from "react";

interface queryParams {
  params: {
    id: string;
  };
}

export default async function Page({ params }: queryParams) {
  // ID 추출
  const { id } = params;
  // 데이터 조회
  const data = await getPicture(Number(id));

  return (
    <>
      <Background dataUrl={data.dataUrl} />
      <PictureModal isHardNav>
        <Picture dataUrl={data.dataUrl} priority={true} src={data.url} />
        <PictureInfo explanation={data.explanation} title={data.title} />
      </PictureModal>
    </>
  );
}
