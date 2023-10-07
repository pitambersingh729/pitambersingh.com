import './globals.css'
import { Roboto } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Pitamber Singh',
  description: 'Learn Web Design &amp; Development with Pitamber Singh. I write tutorials about - HTML, CSS, JavaScript, React JS, Next JS & Responsive Web Design'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
