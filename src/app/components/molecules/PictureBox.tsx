// Component
import { Picture } from "../atoms/Picture";
import PictureCover from "../atoms/PictureCover";

export default function PictureBox({ blurDataURL, title, src }: { blurDataURL?: string, title?: string, src: string }): JSX.Element {
  return (
    <div className="overflow-hidden relative rounded-xl ring-1 ring-zinc-800">
      <Picture blurDataURL={blurDataURL} ratio={9 / 6} src={src} />
      <PictureCover title={title} />
    </div>
  );
}