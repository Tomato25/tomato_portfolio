import "./globals.css";
import { Noto_Sans_Mono } from '@next/font/google';


const inter = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap'
});

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
      <body className={inter.className}> 
        <div  className="flex flex-col flex-grow min-h-screen text-lightGreen" >      
        {children}
        </div>

      </body>
    </html>
  );
}
