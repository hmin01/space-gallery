"use client"

// Component
import Link from "next/link";
// Type
import type { ProcessedPhotoProps } from "@/types/photo";


interface ListProps {
  photos: ProcessedPhotoProps[];
}

export default function List({ photos }: ListProps): JSX.Element {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[1960px] mx-auto">
      {photos.map((elem: ProcessedPhotoProps): React.ReactNode => (
        <Link href={`/photo/${elem.id}`} key={elem.id} shallow>{elem.component}</Link>
      ))}
    </div>
  );
}