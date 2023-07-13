// Type
import type { PropsWithChildren } from "react";

export default function List({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[1960px] mx-auto">{children}</div>
  );
}