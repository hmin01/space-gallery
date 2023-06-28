export interface PictureImage {
  date: string;
  id: string;
  url: string;
}

export interface Picture extends PictureImage {
  explanation: string;
  timestamp: number;
  title: string;
}