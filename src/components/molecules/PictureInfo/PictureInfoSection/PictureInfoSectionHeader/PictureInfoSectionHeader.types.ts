// Type
import type { PropsWithChildren } from "react";

export default interface PictureInfoSectionHeaderProps extends PropsWithChildren {
  /** 닫기 이벤트 핸들러 */
  onClose: () => void;
}
