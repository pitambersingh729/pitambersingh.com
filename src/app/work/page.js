import Image from 'next/image'
import styles from './work.module.css'
import Thumbnail from './../images/thumbnail.jpg'

const Work = () => {
  return (
    <>
<div className={styles.workPage}>
  <div className={styles.container}>
    <div className={styles.sidebarFilter}>
      <h2>Filter by</h2>
      <div className={styles.filterBlock}>
        <h3>Technology</h3>
        <ul>
          <li className={styles.active}><span></span>HTML</li>
          <li><span></span>CSS</li>
          <li><span></span>React JS</li>
          <li><span></span>Next JS</li>
          <li><span></span>Wordpress</li>
          <li><span></span>Web Vitals</li>
          <li><span></span>Google AMP</li>
        </ul>
      </div>
    </div>
    <div className={styles.workListing}>
      <h1>Work History</h1>
      <div className={styles.blogSearch}>
        <input type="text" placeholder="Search Projects...."></input>
      </div>
      <div className={styles.storiesListing}>
        <div className={styles.storiesListingIn}>
          <article>
            <div className={styles.articleLogo}>
              <a href="#">
              <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						  />
              </a>
            </div>
            <div className={styles.articleCont}>
              <div className={styles.technologiesUsed}>
                <h3>Healthshots</h3>
                <div><small>HTML</small><small>CSS</small><small>React</small></div>
              </div>
            </div>
          </article>
          <article>
            <div className={styles.articleLogo}>
              <a href="#">
              <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
              </a>
            </div>
            <div className={styles.articleCont}>
              <div className={styles.technologiesUsed}>
                <h3>Nexa</h3>
                <div><small>HTML</small><small>CSS</small><small>React</small></div>
              </div>
            </div>
          </article>
          <article>
            <div className={styles.articleLogo}>
              <a href="#">
              <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
              </a>
            </div>
            <div className={styles.articleCont}>
              <div className={styles.technologiesUsed}>
                <h3>Opus</h3>
                <div><small>HTML</small><small>CSS</small><small>React</small></div>
              </div>
            </div>
          </article>
          <article>
            <div className={styles.articleLogo}>
              <a href="#">
              <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
              </a>
            </div>
            <div className={styles.articleCont}>
              <div className={styles.technologiesUsed}>
                <h3>Unsere Alpen</h3>
                <div><small>HTML</small><small>CSS</small><small>React</small></div>
              </div>
            </div>
          </article>
          <article>
            <div className={styles.articleLogo}>
              <a href="#">
              <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
              </a>
            </div>
            <div className={styles.articleCont}>
              <div className={styles.technologiesUsed}>
                <h3>Healthshots</h3>
                <div><small>HTML</small><small>CSS</small><small>React</small></div>
              </div>
            </div>
          </article>
          <article>
            <div className={styles.articleLogo}>
              <a href="#">
              <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
              </a>
            </div>
            <div className={styles.articleCont}>
              <div className={styles.technologiesUsed}>
                <h3>Nexa</h3>
                <div><small>HTML</small><small>CSS</small><small>React</small></div>
              </div>
            </div>
          </article>
          <article>
            <div className={styles.articleLogo}>
              <a href="#">
              <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
              </a>
            </div>
            <div className={styles.articleCont}>
              <div className={styles.technologiesUsed}>
                <h3>Opus</h3>
                <div><small>HTML</small><small>CSS</small><small>React</small></div>
              </div>
            </div>
          </article>
          <article>
            <div className={styles.articleLogo}>
              <a href="#">
              <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
              </a>
            </div>
            <div className={styles.articleCont}>
              <div className={styles.technologiesUsed}>
                <h3>Unsere Alpen</h3>
                <div><small>HTML</small><small>CSS</small><small>React</small></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>      
    </>
  )
}

export default Work;