import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../global/Header/Header";
import Footer from "../../global/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Pitamber Singh',
  description: 'Learn Web Design & Development with Pitamber Singh. I write tutorials about - HTML, CSS, JavaScript, React JS, Next JS, Wordpress, Core Web Vitals, Google AMP & Responsive Web Design',
  keywords: ['html tutorials', 'css tutorials', 'react js tutorials', 'next js tutorials', 'core web vitals', 'google amp', 'nextjs setup', 'nextjs routing', 'python', 'chatgpt implementation'],
  icons:{
    icon:[
      '/favicon-32x32.png'
    ],
    apple:[
      '/apple-touch-icon.png'
    ],
    android: [
      '/android-chrome-192x192.png'
    ]
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/homepage_og.png',
  },
  twitter: {
    card: "summary_large_image",
    title:"Pitamber Singh",
    description: "Learn Web Design & Development with Pitamber Singh. I write tutorials about - HTML, CSS, JavaScript, React JS, Next JS, Wordpress, Core Web Vitals, Google AMP & Responsive Web Design",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}