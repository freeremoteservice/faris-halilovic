import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { HeroUIProvider } from '@heroui/react';

import "./globals.css";
import 'react-circular-progressbar/dist/styles.css';

// Load Montserrat and Roboto from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you want
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you want
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Faris Portfolio",
  description:
    "Faris Halilovic Portfolio using Next.js. Full Stack Developer Ready !! ",
  icons: {
    icon: '/profile.png',
  },
  creator: 'Faris Halilovic',
  keywords: 'Portfolio, Full Stack, Development, Freelance, Faris, Amano, Frontend, Backend, Design, Crypto',
  abstract: 'Faris Halilovic Portfolio',
  applicationName: 'Faris',
  openGraph: {
    type: "website",
    images: [
      {
        url: 'https://i.postimg.cc/0QwDNQFG/intro.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.postimg.cc/0QwDNQFG/intro.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'cover',
      },
    ],
    title: "Faris Halilovic",
    description: "🌟 Full-stack developer with 8 years of experience specializing in PHP and JavaScript development.",
    url:"https://farishalilovic.vercel.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
