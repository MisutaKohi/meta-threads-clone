import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";
import { Head } from "next/document";


const inter = Inter({ subsets: ['latin'] });

/* Helps with SEO */
export const metadata = {
  title: 'Threads',
  description: 'A NextJS 14 Meta Threads Application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ inter.className }>
          <Topbar />

          <main>
            <LeftSidebar />

            <section>
              <div className='w-full max-w-4xl'>
                { children }
              </div>
            </section>

            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
