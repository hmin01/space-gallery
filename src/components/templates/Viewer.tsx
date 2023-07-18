// Component
import { BasicPhoto } from "@/components/atoms/Photo";
import { PhotoModal } from "@/components/molecules/Modal";
import Tooptip from "@/components/molecules/Tooltip";
// Type
import type { PhotoInfoProps } from "@/types/photo";

/** [Properties] For Viewer */
interface ViewerProps {
  info: PhotoInfoProps;
  isHardNav?: boolean;
}

export default async function Viewer({ info, isHardNav }: ViewerProps): Promise<JSX.Element> {
  return (
    <PhotoModal backdrop={isHardNav ? info.dataUrl : undefined}>
      <BasicPhoto blurDataUrl={info.dataUrl} priority src={info.url} />
      <Tooptip info={info} isHardNav={isHardNav} />
    </PhotoModal>
  );
}