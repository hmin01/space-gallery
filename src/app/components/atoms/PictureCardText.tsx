// Type
import type { PropsWithChildren } from 'react';

const PictureCardText: React.FC<any> = ({ children }: PropsWithChildren) => {
  return (
    <p className="max-h-36 overflow-y-scroll text-sm">{children}</p>
  );
}

export default PictureCardText;