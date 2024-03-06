// Component
import Image from "next/image";
// Type
import type BackgroundProps from "./Background.types";

export default function Background({ dataUrl }: BackgroundProps) {
  return <>{dataUrl && <Image alt="background" fill={true} priority src={dataUrl} style={{ objectFit: "cover" }} />}</>;
}
