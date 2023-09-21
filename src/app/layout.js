'use client'
import './globals.css'
import { Lustria, Lato } from 'next/font/google'
import { useState } from 'react'
import Navbar from './components/Navbar'

const lustria = Lustria({
  subsets: ['latin'],
  variable: '--font-lustria',
  display: 'swap',
  weight: ['400']
})
const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['400', '700']
})

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <title>SHYAM VANDANA CONSTRUCTION</title>
      </head>
      <body
        style={{
          overflow: open ? 'hidden' : 'auto',
        }}
        className={`${lustria.variable} ${lato.variable}`
        }>

        <Navbar open={open} setOpen={setOpen} />
        {children}
      </body>
    </html>
  )
}
