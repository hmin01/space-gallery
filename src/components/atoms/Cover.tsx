/** [Properties] For PhotoNamingCover */
interface PhotoNamingCoverProps {
  title?: string;
}

export function PhotoNamingCover({ title }: PhotoNamingCoverProps) {
  return (
    <div className="absolute bottom-0 duration-300 flex flex-col justify-end hover:opacity-100 h-full opacity-0 w-full">
      <h5 className="bg-black bg-opacity-40 px-4 py-2 text-white">{title}</h5>
    </div>
  );
}