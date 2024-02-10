import Image from 'next/image'
import Link from 'next/link';
import styles from './about.module.css'

const About = () => {
  return (
    <>
      <section className={styles.mainPage}>
        <div className={styles.container}>
          <nav>
            <ol className={styles.cdbreadcrumb}>
              <li><Link href="/">Home</Link></li>
              <li className={styles.current}><em>About</em></li>
            </ol>
          </nav>
        </div>
        <div className={styles.container}>
          <div className={styles.pageLeft}>
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
              <div className={styles.widgetOb}><span><a href="#">
                <Image
                  src="/profile.jpg"
                  alt="Thumbnail"
                  width={606}
                  height={619}
                />
              </a></span></div>
              <div className={styles.widgetOv}>
                <h3>Pitamber Singh</h3>
                <span className={styles.catName}>Frontend Develoeper</span>
              </div>
              <div className={styles.profileButtons}>
                <a href="#">Connect</a>
                <a href="#">Message</a>
              </div>
            </div>
          </aside>       
        </div>
        {/*<div className={styles.featuredArticles}>
          <div className={styles.container}>
            <h2>Featured Articles</h2>
            <h3>Featured handcrafted articles about my thoughts and experiments.</h3>
            <div className={styles.featuredArticlesIn}>
            
            </div>
          </div>
  </div>*/}
      </section>
    </>
  )
}

export function generateMetadata() {
  return {
    title: "Pitamber Singh | About Us",
    description: "Programmer interested in React.JS, Next.JS, HTML5, CSS3, HTML6, Jquery, Javascript, Wordpress & AWS"
  }
}

export default About;