import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <section className="bg-black p-4">{children}</section>
  );
}