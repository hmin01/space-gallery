// Component
import { AnimatePresence } from "@/components/atoms/AnimatePresence";
import Backdrop from "@/components/atoms/Backdrop";
import { ImageContainer, ScreenContainer } from "@/components/atoms/Container";
import { Picture } from "@/components/atoms/Picture";
import { ControlScreen } from "@/components/organisms/ControlScreen";
// Type
import type { PictureInfo } from "@/types/picture";

export default async function Viewer({ info }: { info: PictureInfo }): Promise<JSX.Element> {
  return (
    <div className="bg-black h-screen w-screen">
      <Backdrop background={info.dataUrl}>
        <ScreenContainer>
          <ImageContainer>
            <AnimatePresence>
              <Picture blurDataURL={info.dataUrl} priority src={info.url} />
            </AnimatePresence>
          </ImageContainer>
          <ControlScreen info={info} />
        </ScreenContainer>
      </Backdrop>
    </div>
  );
}