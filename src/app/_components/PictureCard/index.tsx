// Component
import { Picture } from "@/components/atoms";
import Link from "next/link";
import PictureCardCover from "./PictureCardCover";
// Type
import type PictureCardProps from "./PictureCard.types";

export default function PictureCard({ dataUrl, id, priority, title, url }: PictureCardProps) {
  return (
    <Link className="brightness-90 duration-300 hover:brightness-125 overflow-hidden relative rounded-xl ring-1 ring-zinc-800" href={`/picture/${id}`} scroll={false} shallow>
      <Picture dataUrl={dataUrl} isRatio priority={priority} src={url} />
      <PictureCardCover>{title}</PictureCardCover>
    </Link>
  );
}
