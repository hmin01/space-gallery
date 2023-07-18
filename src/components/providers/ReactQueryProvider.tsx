"use client"

// React Query
import { QueryClient, QueryClientProvider } from "react-query";
// Type
import type { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

const ReactQueryProvider: React.FC<any> = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;