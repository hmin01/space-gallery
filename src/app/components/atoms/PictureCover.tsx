export default function PictureCover({ title }: { title?: string }) {
  return (
    <div className="absolute bottom-0 flex flex-col justify-end hover:opacity-100 h-full opacity-0 w-full">
      <h5 className="bg-black px-4 py-2 text-white">{title}</h5>
    </div>
  );
}