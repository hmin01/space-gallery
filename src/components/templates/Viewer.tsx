// Component
import { BasicPhoto } from "@/components/atoms/Photo";
import { PhotoModal } from "@/components/molecules/Modal";
import Slider from "@/components/organisms/Slider";
// Type
import type { PhotoInfoProps } from "@/types/photo";

/** [Properties] For Viewer */
interface ViewerProps {
  info: PhotoInfoProps;
  navigate?: boolean;
}

export default async function Viewer({ info, navigate }: ViewerProps): Promise<JSX.Element> {
  return (
    <PhotoModal backdrop={navigate ? undefined : info.dataUrl}>
      <BasicPhoto blurDataUrl={info.dataUrl} priority src={info.url} />
      <Slider info={info} navigate={navigate} />
    </PhotoModal>
  );
}