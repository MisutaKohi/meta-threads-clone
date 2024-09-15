import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import '../globals.css';

/* Helps with SEO */
export const metadata = {
  title: 'Threads',
  description: 'A NextJS 14 Meta Threads Application',
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={ `${inter.className} bg-dark-1` }>
          { children }
        </body>
      </html>
    </ClerkProvider>
  )
}