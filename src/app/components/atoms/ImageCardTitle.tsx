// Type
import type { PropsWithChildren } from 'react';

const ImageCardTitle: React.FC<any> = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-md">{children}</h2>
  );
}

export default ImageCardTitle;