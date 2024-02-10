import Image from "next/image";
import Link from "next/link";
import styles from './Footer.css'

async function FooterPostsAPI() {
const response = await fetch("https://xypherspot.com/api/wp-json/wp/v2/posts");
if (!response.ok) {
    throw new Error('failed to fetch users')
}
return await response.json()
}

export default async function Footer() {
    const users = await FooterPostsAPI();
    return(
      <>
        <footer className="footer">
          <div className="container">
            <div className="widgetBlock">
                <h4>About</h4>
                <p>A passionate frontend developer with a strong foundation in React.js, Next.js, HTML, CSS, WordPress, and JavaScript. My journey in the world of web development has equipped me with the skills to create dynamic and visually appealing user interfaces.</p>
            </div>
            <div className="widgetBlock">
                <h4>Skills</h4>
                <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>WordPress</li>
                <li>Google AMP</li>
                </ul>
            </div>
            <div className="widgetBlock">
                <h4>Blogs</h4>
                <ul>
                  {
                    users.map((item, index) => {
                    const {title, slug} = item;
                      return (
                        <li key={index}>
                          <Link href={`/${slug}`} dangerouslySetInnerHTML={{ __html: `${title.rendered}` }}></Link>
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
            <div className="widgetBlock">
                <h4>Latest Stories</h4>
                <ul>
                  {
                    users.map((item, index) => {
                    const {title, slug} = item;
                      return (
                        <li key={index}>
                          <Link href={`/${slug}`} dangerouslySetInnerHTML={{ __html: `${title.rendered}` }}></Link>
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
          </div>
          <div className="footerBottom">
            <div className="container">
                <span className="copyright">&#169; 2024, Pitamber Singh. All Rights Reserved.</span>
                <div className="connect">
                    <ul>
                        <li><a href="#"><Image src="/facebook.svg" quality={80} width={32} height={32} alt="Facebook" /></a></li>
                        <li><a href="#"><Image src="/instagram.svg" quality={80} width={32} height={32} alt="Instagram" /></a></li>
                        <li><a href="#"><Image src="/github.svg" quality={80} width={32} height={32} alt="GitHub" /></a></li>
                        <li><a href="#"><Image src="/slack.svg" quality={80} width={32} height={32} alt="Slack" /></a></li>
                    </ul>
                </div>
            </div>
          </div>
        </footer>         
      </>
    )
}