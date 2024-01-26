import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../global/Header/Header";
import Footer from "../../global/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Pitamber Singh',
  description: 'Learn Web Design &amp; Development with Pitamber Singh. I write tutorials about - HTML, CSS, JavaScript, React JS, Next JS & Responsive Web Design',
  // openGraph:{
  //   images:userData.featured_image,
  // },  
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
