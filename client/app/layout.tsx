import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["100","300","400","500","700","900"],
  subsets: ["latin"],
  style: ["normal","italic"],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
