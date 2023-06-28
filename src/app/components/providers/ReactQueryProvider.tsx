'use client'

import { useState } from 'react';
// React Query
import { QueryClient, QueryClientProvider } from 'react-query';
// Type
import type { PropsWithChildren } from 'react';

const ReactQueryProvider: React.FC<any> = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;