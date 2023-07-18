// Component
import { BackButton, InfoButton } from "@/components/atoms/Button";
import { InfoModal } from "@/components/molecules/Modal";
// Type
import type { PhotoInfoProps } from "@/types/photo";

/** [Properties] For Slider */
interface TooptipProps {
  info: PhotoInfoProps;
  isHardNav?: boolean;
}

export default function Tooptip({ info, isHardNav }: TooptipProps): JSX.Element {
  return (
    <div className="absolute h-full top-0 select-none w-full">
      <BackButton isHardNav={isHardNav} />
      <InfoButton />
      <InfoModal info={info} />
    </div>
  );
}