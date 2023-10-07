import Image from 'next/image'
import Thumbnail from './../images/thumbnail.jpg'
import Link from 'next/link';
import styles from './about.module.css'

const About = () => {
  return (
    <>
      <section className={styles.blogPage}>
        <div className={styles.container}>
          <div className={styles.blogLeft}>
            <nav>
              <ol className={styles.cdbreadcrumb}>
                <li><Link href="/">Home</Link></li>
                <li className={styles.current}><em>About</em></li>
              </ol>
            </nav>

            <div className={styles.pageContent}>
              <h1>Hi! I am Pitamber Singh 👋</h1>
              <p>I have been programming every day for the past 8 years.</p>

              <p>I try to learn everyday and I write clean code that makes sense to me and help others & including myself to increase the productivity.</p>

              <p>I try to solve the code by myself, sometimes due to time crunch, I also learn from others as much as possible.</p>

              <p>I like finding new ways to save myself time - solving problems, writing clean code, automating things.</p>

              <p>You can contact me by emailing me at <a href="mailto:pitambersingh729@gmail.com">pitambersingh729@gmail.com</a></p>
            </div>
          </div>
          <aside id={styles.sidebar}>
            <div className={`${styles.widgetAside} widgetAsideBrowse`}>
              <h3>Popular Stories</h3>
              <ul>
                <li>
                  <div className={styles.widgetOb}><a href="#">
                  <Image
                    src={Thumbnail}
                    alt="Thumbnail"
                    width={90}
                    height={80}
                  />                      
                  </a></div>
                  <div className={styles.widgetOv}>
                    <p><a href="#">Want To Sell PS5 Best Places To Sell Your PS5 At High Price</a></p>
                    <span className={styles.catName}><a href="#">Playstation 5</a></span>
                  </div>
                </li>

                <li>
                  <div className={styles.widgetOb}><a href="#">
                  <Image
                    src={Thumbnail}
                    alt="Thumbnail"
                    width={90}
                    height={80}
                  />                      
                  </a></div>
                  <div className={styles.widgetOv}>
                    <p><a href="#">Apple iPhone 14 Plus is at Rs 12,000 Only On Flipkart: Check Deal</a></p>
                    <span className={styles.catName}><a href="#">Technology</a></span>
                  </div>
                </li>

                <li>
                  <div className={styles.widgetOb}><a href="#">
                  <Image
                    src={Thumbnail}
                    alt="Thumbnail"
                    width={90}
                    height={80}
                  />  
                  </a></div>
                  <div className={styles.widgetOv}>
                    <p><a href="#">What Is Next js &amp; How To Setup &amp; Install In Windows 10</a></p>
                    <span className={styles.catName}><a href="#">Development</a></span>
                  </div>
                </li>

                <li>
                  <div className={styles.widgetOb}><a href="#">
                  <Image
                    src={Thumbnail}
                    alt="Thumbnail"
                    width={90}
                    height={80}
                  />                      
                  </a></div>
                  <div className={styles.widgetOv}>
                    <p><a href="#">How To Prepare For React JS Interview</a></p>
                    <span className={styles.catName}><a href="#">Interview Questions</a></span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(){
  return{
    title:"About Us",
    description:"Programmer interested in React.JS, Next.JS, HTML5, CSS3, HTML6, Jquery, Javascript, Wordpress & AWS"
  }
}

export default About;