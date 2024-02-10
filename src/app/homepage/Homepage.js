import styles from './home.module.css'
import Herobanner from "./Herobanner";
import RecentPosts from "./RecentPosts";
import WebVitals from "./WebVitals";
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
		</section>
    </>
  )
}

export const metadata = {
  title: "Pitamber Singh",
  description: "Programmer interested in React.JS, Next.JS, HTML5, CSS3, HTML6, Jquery, Javascript, Wordpress & AWS",
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/homepage_og.png',
  },
  twitter: {
    card: "summary_large_image",
    title:"Pitamber Singh",
    description: "Programmer interested in React.JS, Next.JS, HTML5, CSS3, HTML6, Jquery, Javascript, Wordpress & AWS",
  }
}