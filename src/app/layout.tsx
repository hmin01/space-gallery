// Component
import Providers from "./providers";
// Font
import { Inter } from "next/font/google";
// Style
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-black min-h-screen ${inter.className}`}>
        <Providers>
          <>{modal}</>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
