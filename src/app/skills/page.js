import Image from 'next/image'
import Link from 'next/link';
import styles from './skills.module.css'

const Skills = () => {
  return (
    <>
      <section className={styles.mainPage}>
        <div className={styles.container}>
          <nav>
            <ol className={styles.cdbreadcrumb}>
              <li><Link href="/">Home</Link></li>
              <li className={styles.current}><em>Skills</em></li>
            </ol>
          </nav>
        </div>
        <div className={styles.container}>
          <ul className={styles.skills}>
            <li>
              <Image
                src="/react.jpg"
                alt="React.js"
                width={120}
                height={107}
              />
              <span>React JS</span>
            </li>
            <li>
              <Image
                src="/next.png"
                alt="Next.js"
                width={150}
                height={90}
              />
              <span>Next JS</span>
            </li>            
            <li>
              <Image
                src="/googleamp.png"
                alt="Google AMP"
                width={105}
                height={105}
              />
              <span>AMP</span>
            </li>
            <li>
              <Image
                src="/javascript.png"
                alt="Javascript"
                width={110}
                height={110}
              />
              <span>Javascript</span>
            </li>   
            <li>
              <Image
                src="/wordpress.png"
                alt="Wordpress"
                width={120}
                height={120}
              />
              <span>Wordpress</span>
            </li> 
            <li>
              <Image
                src="/html5.png"
                alt="HTML5"
                width={100}
                height={114}
              />
              <span>HTML5</span>
            </li> 
            <li>
              <Image
                src="/css3.png"
                alt="CSS3"
                width={100}
                height={110}
              />
              <span>CSS3</span>
            </li>                                               
          </ul>
        </div>
      </section>
    </>
  )
}

export function generateMetadata() {
  return {
    title: "Pitamber Singh | Skills",
    description: "Programmer interested in React.JS, Next.JS, HTML5, CSS3, HTML6, Jquery, Javascript, Wordpress & AWS"
  }
}

export default Skills;