export interface PictureProps {
  /** 이미지 데이터 URL */
  dataUrl?: string;
  /** 비율 적용 여부 */
  isRatio?: boolean;
  /** 우선 순위 */
  priority?: boolean;
  /** 이미지 URL */
  src: string;
}
