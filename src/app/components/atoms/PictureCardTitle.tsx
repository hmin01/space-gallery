// Type
import type { PropsWithChildren } from 'react';

const PictureCardTitle: React.FC<any> = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-md">{children}</h2>
  );
}

export default PictureCardTitle;