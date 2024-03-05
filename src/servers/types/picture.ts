/**
 * 사진 데이터
 */
export interface PictureData {
  /** 블러를 위한 이미지 데이터 URL */
  dataUrl: string;
  /** ID */
  id: string;
  /** 원본 이미지 URL */
  url: string;
}
/**
 * 사진 정보
 */
export interface PictureInfo extends PictureData {
  /** 설명 */
  explanation: string;
  /** 제목 */
  title: string;
}