import dynamic from "next/dynamic";
// API
import { getPicture } from "@/apis/picture";
// Component
const Picture: ComponentType<any> = dynamic(() => import("@/components/atoms").then((m: any) => m.Picture));
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
    <main className="fixed top-1">
      <PictureModal>
        <Picture dataUrl={data.dataUrl} src={data.url} />
        <PictureInfo explanation={data.explanation} title={data.title} />
      </PictureModal>
    </main>
  );
}
