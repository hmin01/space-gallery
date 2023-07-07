export function ControlScreen(): JSX.Element {
  return (
    <div className="absolute h-full top-0 w-full">
      <span className="absolute bg-black flex h-5 items-center justify-center right-4 rounded-full text-white top-4 w-5 z-10">I</span>
      <div className="flex h-full items-center justify-between relative w-full">
        <span className="bg-black flex h-5 items-center justify-center right-4 rounded-full text-white top-4 w-5 z-10">{"<"}</span>
        <span className="bg-black flex h-5 items-center justify-center right-4 rounded-full text-white top-4 w-5 z-10">{">"}</span>
      </div>
    </div>
  );
}