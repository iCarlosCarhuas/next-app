import NavBar from '@/Components/NavBar.jsx'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Web Application',
  description: "Demo about new Next's features",
  keywords: 'next, react, app, next13',
}

export default function RootLayout({ children }) {
  return (
    <html>
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
    </html>
  )
}
