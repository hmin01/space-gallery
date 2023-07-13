export interface PhotoProps {
  dataUrl: string;
  date: string;
  id: string;
  url: string;
}

export interface PhotoInfoProps extends PhotoProps {
  explanation: string;
  timestamp: number;
  title: string;
}