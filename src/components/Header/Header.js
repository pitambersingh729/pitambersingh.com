import Link from 'next/link';   
import Image from 'next/image';
import localFont from 'next/font/local';
import styles from './Header.css';

const proximanova = localFont({
  src: [
    {
      path:'./fonts/proxima-nova-cond-bold-webfont.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/proxima-nova-cond-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/proxima-nova-condensed-webfont.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/proxima-nova-condensed-webfont.woff',
      weight: '400',
      style: 'normal',
    },
  ],
})

const Header = () =>{
  return(
    <>
      <header className="header">
        <div className="container">
          <Link className="logo" href="/"><Image src="/logo.png" quality={80} width={177} height={174} alt="Facebook" /></Link>
          <ul>
            <li><Link className={proximanova.className} href="/about">About</Link></li>
            {/*<li><Link className={proximanova.className} href="/work">Work</Link></li>*/}
            <li><Link className={proximanova.className} href="/skills">Skills</Link></li>
            <li><Link className={proximanova.className} href="/ask-anything">Ask Anything</Link></li>
            <li><Link className={proximanova.className} href="/blog">Blog</Link></li>
            {/*<li><Link className={proximanova.className} href="/contact">Contact</Link></li>*/}
          </ul>
          <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;