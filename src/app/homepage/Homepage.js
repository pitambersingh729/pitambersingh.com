import Herobanner from "./Herobanner";
import LatestStories from "./LatestStories";
import WebVitals from "./WebVitals";
import WorkSamples from "./WorkSamples";
import styles from './home.module.css'

const Homepage = () => {
  return(
    <>
		<section className={styles.heroPage}>
			<div className={styles.container}>
				<Herobanner />
				<LatestStories />
			</div>
			<WebVitals />
			<WorkSamples />
		</section>
    </>
  )
}
export default Homepage;