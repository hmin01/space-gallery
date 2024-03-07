// Type
import type { PropsWithChildren } from "react";

export default function PictureSection({ children }: PropsWithChildren) {
  return <section className="flex max-w-3xl items-center max-h-screen relative w-full h-auto">{children}</section>;
}
