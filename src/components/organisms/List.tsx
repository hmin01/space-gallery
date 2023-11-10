"use client"

// Component
import Link from "next/link";
// Type
import type { ProcessedPhotoProps } from "@/types/photo";

import { useCallback, useState } from "react";
import { useDisplayMainModal } from "@/status/modal";
import Viewer from "../templates/Viewer";

interface ListProps {
  photos: ProcessedPhotoProps[];
}

export default function List({ photos }: ListProps): JSX.Element {
  const { setShow } = useDisplayMainModal();

  /** [Event handler] 클릭 이벤트 */
  const onClick = useCallback(() => setShow(true), [setShow]);

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[1960px] mx-auto">
      {photos.map((elem: ProcessedPhotoProps): React.ReactNode => (
        <Link href={`/photo/${elem.id}`} key={elem.id} shallow>{elem.component}</Link>
        // <div onClick={onClick}>{elem.component}</div>
      ))}
    </div>
  );
}