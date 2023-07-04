// Component
import { Picture } from "../atoms/Picture";
import PictureCover from "../atoms/PictureCover";

export default function PictureCard({ title, src }: { title?: string, src: string }): JSX.Element {
  return (
    <div className="overflow-hidden relative rounded-xl">
      <Picture src={src} />
      <PictureCover title={title} />
    </div>
  );
}