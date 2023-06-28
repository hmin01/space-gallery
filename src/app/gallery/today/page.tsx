// API
import { getPictureInfo } from "../../../../servers/picture/api";
// Component
import PictureCard from "@/app/components/molecules/PictureCard";
// Utilities
import dayjs from "dayjs";

export default async function Page(): Promise<JSX.Element> {
  const today: string = dayjs().format("YYYY-MM-DD");

  const data = await getPictureInfo(today);

  return (
    <div>
      <PictureCard info={data} />
    </div>
  );
} 