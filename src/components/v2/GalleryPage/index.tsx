// Component (Local)
import GalleryContent from "./GalleryContent";
// React
import { Suspense } from "react";

export default function GalleryPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[1960px] mx-auto">
        <Suspense fallback={<div className="text-white">loading...</div>}>
          <GalleryContent />
        </Suspense>
      </div>
    </div>
  );
}
