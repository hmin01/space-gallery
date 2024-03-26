// Component
import Image from "next/image";
// Type
import type BackgroundProps from "./Background.types";

export default function Background({ dataUrl }: BackgroundProps) {
  return (
    <div className="absolute h-full w-full">
      <>{dataUrl && <Image alt="background" className="h-full inset-0 object-cover w-full" fill={true} priority src={dataUrl} />}</>
      <div className="bg-black/30 h-full w-full"></div>
    </div>
  );
}
