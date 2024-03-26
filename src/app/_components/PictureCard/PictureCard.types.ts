export default interface PictureCardProps {
  /** 이미지 데이터 URL (For blur) */
  dataUrl?: string;
  /** ID */
  id: string;
  /** 우선 순위 */
  priority?: boolean;
  /** 이미지 제목 */
  title: string;
  /** 이미지 URL */
  url: string;
}
