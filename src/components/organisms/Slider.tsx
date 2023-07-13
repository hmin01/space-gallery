// Component
import { BackButton, InfoButton } from "@/components/atoms/Button";
import { InfoModal } from "@/components/molecules/Modal";
// Type
import type { PhotoInfoProps } from "@/types/photo";

/** [Properties] For Slider */
interface SliderProps {
  info: PhotoInfoProps;
  navigate?: boolean;
}

export default function Slider({ info, navigate }: SliderProps): JSX.Element {
  return (
    <div className="absolute h-full top-0 select-none w-full">
      <BackButton />
      <InfoButton />
      <InfoModal info={info} />
    </div>
  );
}