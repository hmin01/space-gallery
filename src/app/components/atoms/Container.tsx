// Type
import type { PropsWithChildren } from "react";

export function ImageContainer({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="relative">{children}</div>
  );
}

export function ScreenContainer({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="container max-h-full max-w-7xl overflow-hidden relative z-30">{children}</div>
  );
}