import NavBar from "./components/NavBar";
import "./globals.css";
import {Noto_Sans_Mono } from "@next/font/google"
import { text } from "stream/consumers";



const NotoSans = Noto_Sans_Mono({
  weight:["400", "600"],
  subsets:["latin"],
  variable: "--font-notosans"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${NotoSans.variable} font-notosans text-lightGreen`}> 
        <div className="bg-bg1 flex flex-col ">
        <div>
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
