import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'; 
import Navbar from './components/Navbar'
import { CartProvider } from '@/app/context/CartContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>

        <Navbar/>
        {children}
        <ToastContainer />
        </CartProvider>
        </body>
    </html>
  )
}
