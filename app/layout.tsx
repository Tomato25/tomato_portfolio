import "./globals.css";
import { Poppins } from "next/font/google";
import PageWrapper from "./components/page-wrapper";


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400","500","700"]
});

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
      <body className={`${poppins.variable} font-sans scrollbar-hide `}>
        <div className="flex flex-col flex-grow text-lightGreen bg-bg1 ">
          <PageWrapper>
            {children}
          </PageWrapper>  
        </div>
      </body>
    </html>
  );
}
