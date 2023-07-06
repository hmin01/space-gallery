// Component
import { Picture } from "@/components/atoms/Picture";
// Type
import { PictureInfo } from "@/types/picture";

export default async function PictureCard({ info }: { info: PictureInfo }): Promise<JSX.Element> {
  return (
    <>
      <Picture blurDataURL={info.dataUrl} src={info.url} />
    </>
  );
}