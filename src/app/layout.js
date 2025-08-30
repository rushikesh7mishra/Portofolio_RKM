import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rushikesh Mishra - Web & Mobile App Developer",
  description:
    "Official portfolio of Rushikesh Mishra, Full Stack Developer specializing in MERN, React Native, and Python/Django.",
  keywords: [
    "Rushikesh Mishra",
    "Full Stack Developer",
    "Web Developer",
    "Mobile App Developer",
    "MERN Stack",
    "React Native",
    "Portfolio",
  ],
  openGraph: {
    title: "Rushikesh Mishra - Portfolio",
    description:
      "Explore the projects and skills of Rushikesh Mishra, Web & Mobile App Developer.",
    url: "https://www.rushikeshmishra.com",
    siteName: "Rushikesh Mishra Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushikesh Mishra - Portfolio",
    description:
      "Official portfolio of Rushikesh Mishra. Web & Mobile App Developer with MERN, React Native, and Django expertise.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NRS9PX9R2K"
      ></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date()); 
        gtag('config', 'G-NRS9PX9R2K');
        `}
      </Script>
      <SmoothScroll />
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
