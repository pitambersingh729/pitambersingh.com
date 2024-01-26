import styles from './home.module.css'
import Herobanner from "./Herobanner";
// import Clients from "./Clients";
// import LatestStories from "./LatestStories";
// import WebVitals from "./WebVitals";
// import WorkSamples from "./WorkSamples";
// 
// import RecentPosts from "./RecentPosts";

const Homepage = () => {
  return(
    <>
		<section className={styles.heroPage}>
			<div className={styles.container}>
				<Herobanner />
				
			</div>

		</section>
    </>
  )
}
export default Homepage;