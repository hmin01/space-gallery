export interface PhotoProps {
  dataUrl: string;
  id: string;
  url: string;
}

export interface PhotoInfoProps extends PhotoProps {
  explanation: string;
  title: string;
}

export interface ProcessedPhotoProps {
  component: React.ReactNode;
  id: number;
}