// Type
import type { PropsWithChildren } from "react";

export default function PictureCardCover({ children }: PropsWithChildren) {
  return (
    <div className="absolute bottom-0 duration-300 flex flex-col justify-end hover:opacity-100 h-full opacity-0 w-full">
      <h5 className="bg-black bg-opacity-40 px-4 py-2 text-white">
        {children}
      </h5>
    </div>
  );
}
