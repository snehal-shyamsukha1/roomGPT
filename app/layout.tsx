import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "GamePac ImageGen";
let description="Using AI to generate images";
let sitename="gamePac imageGen";
let ogimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJd0rK1c9vmIMXoL5LPYjvGZZlYoNJxQ5gA&usqp=CAU";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://design.gamepacai.com/",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images:[ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
