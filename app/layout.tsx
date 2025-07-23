import './globals.css'
import { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'PAL Trading plc',
  description: 'Crafting Stories. Defining the Future. Innovative Media and Entertainment Solutions for Ethiopia.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} flex flex-col min-h-screen`}
      >
        <Header />
        <main>{children}</main>
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  )
}


