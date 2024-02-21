import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:['100','300', '500', '700', '900'] });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight:['300', '500', '700'] })

export const metadata: Metadata = {
  title: "Isaac's Portfolio",
  description: "Portfolio profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
