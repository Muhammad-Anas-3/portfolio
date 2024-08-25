import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

// components
import Header from "@/components/Header";

const jetsBrainMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-JetBrainMono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={jetsBrainMono.variable}>
        <div className="absolute top-0 z-[-2] min-h-screen overflow-x-hidden w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
