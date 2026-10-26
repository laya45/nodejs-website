
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora Digital | Creative Digital Solutions",
  description:
    "Nexora Digital helps businesses grow through web development, UI/UX design, digital marketing, and technology consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
