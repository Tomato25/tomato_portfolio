import "./globals.css";
import { Noto_Sans_Mono} from 'next/font/google'
import PageWrapper from "./projects/page-wrapper";
import NavBar from "./components/NavBar";


const notoSans = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-notosans',
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
      <body className={`${notoSans.variable} font-sans`}> 
        <div  className="flex flex-col flex-grow min-h-screen text-lightGreen bg-bg1" >
        <PageWrapper>     
        {children}
        </PageWrapper>
        </div>

      </body>
    </html>
  );
}
