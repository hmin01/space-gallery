// Type
import type PictureContainerProps from "./PictureContainer.types";

export default function PictureContainer({ height, children, width }: PictureContainerProps) {
  return (
    <div className="flex h-full items-center relative w-full" style={height && width ? { aspectRatio: `${width} / ${height}` } : {}}>
      <div className="h-full relative w-full" style={{ maxHeight: "calc(100vh - 32px)" }}>
        {children}
      </div>
    </div>
  );
}
