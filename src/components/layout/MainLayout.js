'use client'
import { useSelector } from 'react-redux'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export default function MainLayout({ children }) {
  const { theme } = useSelector((state) => state.theme)

  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}