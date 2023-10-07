import Link from 'next/link';   
import localFont from 'next/font/local'

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
                    <Link className="logo" href="/"></Link>
                    <ul>
                        <li><Link className={proximanova.className} href="/about">About</Link></li>
                        <li><Link className={proximanova.className} href="/work">Work</Link></li>
                        <li><Link className={proximanova.className} href="/hireme">Hire Me</Link></li>
                        <li><Link className={proximanova.className} href="/blog">Blog</Link></li>
                        <li><Link className={proximanova.className} href="/contact">Contact</Link></li>
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