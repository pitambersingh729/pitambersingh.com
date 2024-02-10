import Image from "next/image";
import Link from "next/link";
import styles from './home.module.css'

async function HomepagePostsAPI() {
  const response = await fetch("https://xypherspot.com/api/wp-json/wp/v2/posts");
  if (!response.ok) {
    throw new Error('failed to fetch users')
  }
  return await response.json()
}

export default async function HomepageListing() {
  const users = await HomepagePostsAPI();
  return (
    <div className={styles.storiesListing}>
      <h3 className={styles.heading}><span>Stories</span></h3>
        <div className={styles.storiesListingIn}>
        {
        users.map((item, index) => {
          const { id, title, yoast_head_json, _embedded, featured_image, slug, categories_names, acf } = item;
            return (
              <>
                <article key={index}>
                    <div className={styles.articleLogo}>
                      <Link href={`/${slug}/${id}`}>
                        <Image
                          src={featured_image}
                          width={363}
                          height={246}
                          quality={70}
                          alt="Image"
                          priority
                        />
                      </Link>
                    </div>
                    <div className={styles.articleCont}>
                    
                    <span><Link href="/blog">{categories_names}</Link></span>
                    <h4 className={styles.storyHeading}><Link href={`/${slug}`}><div dangerouslySetInnerHTML={{ __html: `${title.rendered}` }} /></Link></h4>
                      <h5><Link href={`/${slug}`}>Read More</Link></h5>
                    </div>
                </article>
              </>
            )
          })
        }
      </div>
    </div>
  )
}