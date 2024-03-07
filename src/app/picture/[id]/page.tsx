import dynamic from "next/dynamic";
// API
import { getPicture } from "@/apis/picture";
// Component
import { Background, Picture, PictureContainer, PictureSection } from "./_components";
// Component (lazy)
const PictureInfo: ComponentType<PictureInfoData> = dynamic(() => import("@/components/molecules").then((m: any) => m.PictureInfo));
// Type
import type { ComponentType } from "react";
import type { PictureInfoData } from "@/types/picture";

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
    <main className="fixed flex inset-0 items-center justify-center">
      <Background dataUrl={data.dataUrl} />
      <PictureSection>
        <PictureContainer height={data.height} width={data.width}>
          <Picture {...data} />
        </PictureContainer>
        <PictureInfo explanation={data.explanation} title={data.title} />
      </PictureSection>
    </main>
  );
}
