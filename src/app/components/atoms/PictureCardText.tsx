// Type
import type { PropsWithChildren } from 'react';

const PictureCardText: React.FC<any> = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-sm">{children}</p>
  );
}

export default PictureCardText;