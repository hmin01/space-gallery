export interface PictureImage {
  dataUrl: string;
  date: string;
  id: string;
  url: string;
}

export interface PictureInfo extends PictureImage {
  explanation: string;
  timestamp: number;
  title: string;
}