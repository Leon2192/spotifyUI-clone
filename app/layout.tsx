'use client'

import './globals.css'

import { Header } from './components/Header'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/Sidebar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-spotify-black min-h-screen text-gray-300'>
          <Header setShowSidebar={setShowSidebar} />
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          {children}
        </div>
      </body>
    </html>
  )
}
