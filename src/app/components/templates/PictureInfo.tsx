// Component
import { ImageContainer, ScreenContainer } from "@/components/atoms/Container";
import { Picture } from "@/components/atoms/Picture";
// Type
import type { PictureInfo } from "@/types/picture";
import Image from "next/image";
import Backdrop from "../atoms/Backdrop";
import { ControlScreen } from "../molecules/ControlScreen";

export default async function PictureInfo({ info }: { info: PictureInfo }): Promise<JSX.Element> {
  return (
    <div className="bg-black h-screen w-screen">
      <Backdrop background={info.dataUrl}>
        <ScreenContainer>
          <ImageContainer>
            <Image alt="picture" blurDataURL={info.dataUrl} height={900} src={info.url} width={1600} />
          </ImageContainer>
          <ControlScreen />
        </ScreenContainer>
      </Backdrop>
    </div>
  );
}