import styles from './home.module.css'
import Herobanner from "./Herobanner";
import RecentPosts from "./RecentPosts";
import WebVitals from "./WebVitals";
import WebStories from './WebStories';
// import Clients from "./Clients";
// import LatestStories from "./LatestStories";

// import WorkSamples from "./WorkSamples";


export default async function Homepage(){
  return(
    <>
		<section className={styles.heroPage}>
			<div className={styles.container}>
				<Herobanner />
        <RecentPosts />
			</div>
      <WebVitals />
      <WebStories />
		</section>
    </>
  )
}