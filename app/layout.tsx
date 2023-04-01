"use client"

import NavBar from "./components/NavBar";
import "./globals.css";
import {Noto_Sans_Mono } from "@next/font/google"
import Cursor from "./components/Cursor";


const NotoSans = Noto_Sans_Mono({
  weight:["400", "600"],
  subsets:["latin"],
  variable: "--font-notosans"
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})



{

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${NotoSans.variable} font-notosans text-lightGreen`}> 
        <div  className="flex flex-col" >     
        {children}
        </div>

      </body>
    </html>
  );
}
