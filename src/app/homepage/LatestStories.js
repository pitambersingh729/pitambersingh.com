import Image from 'next/image'
import styles from './home.module.css'
import Thumbnail from './../images/thumbnail.jpg'

const LatestStories = () => {
  return(
    <>
		<div className={styles.storiesListing}>
			<h3 className={styles.heading}><span>Stories</span></h3>
			<article className={styles.fullStory}>
        <div className={styles.articleLogo}>
          <a href="">
						<Image
							src={Thumbnail}
							alt="Thumbnail"
							width={438}
							height={328}
						/>
					</a>
        </div>
        <div className={styles.articleCont}>
          <span>Development</span>
          <h4 className={styles.storyHeading}><a href="">What Is Next js & How To Setup & Install In Windows 10</a></h4>
          <p>Introducing the latest book from Awwwards, exploring new technologies like AI, AR, VR, no-code tools, and Web3 in the digital industry. Discover the future of innovation...</p>
          <h5>Read More</h5>
        </div>				
			</article>
			<div className={styles.storiesListingIn}>
	      <article>
	        <div className={styles.articleLogo}>
	          <a href="">
						<Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
						</a>
	        </div>
	        <div className={styles.articleCont}>
	          <span>Development</span>
	          <h4 className={styles.storyHeading}><a href="">What Is The Difference Between React JS And React Native?</a></h4>
	          <h5>Read More</h5>
	        </div>
	      </article>
	      <article>
	        <div className={styles.articleLogo}>
	          <a href="">
						<Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
						</a>
	        </div>
	        <div className={styles.articleCont}>
	          <span>Development</span>
	          <h4 className={styles.storyHeading}><a href="">Remove The Last Number Of A Integer In Python</a></h4>
	          <h5>Read More</h5>
	        </div>
	      </article>
	      <article>
	        <div className={styles.articleLogo}>
	          <a href="">
						<Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
						</a>
	        </div>
	        <div className={styles.articleCont}>
	          <span>Development</span>
	          <h4 className={styles.storyHeading}><a href="">HTML 6 Tutorial: Unbelievable Features In HTML6?</a></h4>
	          <h5>Read More</h5>
	        </div>
	      </article>
	      <article>
	        <div className={styles.articleLogo}>
	          <a href="">
						<Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
						</a>
	        </div>
	        <div className={styles.articleCont}>
	          <span>Development</span>
	          <h4 className={styles.storyHeading}><a href="">What Is The Difference Between React JS And React Native?</a></h4>
	          <h5>Read More</h5>
	        </div>
	      </article>
	      <article>
	        <div className={styles.articleLogo}>
	          <a href="">
						<Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
						</a>
	        </div>
	        <div className={styles.articleCont}>
	          <span>Development</span>
	          <h4 className={styles.storyHeading}><a href="">Remove The Last Number Of A Integer In Python</a></h4>
	          <h5>Read More</h5>
	        </div>
	      </article>
	      <article>
	        <div className={styles.articleLogo}>
	          <a href="">
						<Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
						</a>
	        </div>
	        <div className={styles.articleCont}>
	          <span>Development</span>
	          <h4 className={styles.storyHeading}><a href="">HTML 6 Tutorial: Unbelievable Features In HTML6?</a></h4>
	          <h5>Read More</h5>
	        </div>
	      </article>
	    </div>
		</div>      
    </>
  )
}
export default LatestStories;