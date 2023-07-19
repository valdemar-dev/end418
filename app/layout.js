import './globals.css'
import { PT_Serif } from 'next/font/google'

const ptSerif = PT_Serif({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'End',
  description: '...I Like This Song.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ptSerif.className}>{children}</body>
    </html>
  )
}
