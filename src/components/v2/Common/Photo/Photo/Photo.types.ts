export interface PhotoProps {
  /**
   * 블러 데이터 URL
   */
  blurDataUrl?: string;
  /**
   * 이미지 우선순위
   */
  priority?: boolean;
  /**
   * 비율
   */
  ratio?: number;
  /**
   * 이미지 소스 URL
   */
  src: string;
}
