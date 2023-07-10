// Component
import Image from "next/image";
import Link from "next/link";

export default function Backdrop({ background, children }: { background?: string, children?: React.ReactNode }): JSX.Element {
  return (
    <div className="flex h-full items-center justify-center overflow-hidden relative">
      <Link className="absolute h-full top-0 w-full z-10" href="/">
        {background ? (
          <>
            <Image alt="backdroup" className="pointer-events-none" fill src={background} />
            <div className="absolute backdrop-blur-lg bg-black bg-opacity-30 h-full top-0 w-full z-10"></div>
          </>
        ) : (
          <div className="bg-black"></div>
        )}
      </Link>
      <>{children}</>
    </div>
  );
}