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

export default async function HomepageListing({ data }) {
  const users = await HomepagePostsAPI();
  const [firstPost, remainingPosts] = users;
  return (
    <div className={styles.storiesListing}>
      {/* <h3 className={styles.heading}><span>Stories</span></h3> */}
        <article className={styles.fullStory}>
          <div className={styles.articleLogo}>
            <Image
              src={firstPost.featured_image}
              width={363}
              height={246}
              quality={70}
              alt="Image"
              priority
            />
          </div>
          <div className={styles.articleCont}>
          <span><Link href="/blog">{firstPost.categories_names}</Link></span>
          <h4 className={styles.storyHeading}><div dangerouslySetInnerHTML={{ __html: `${firstPost.title.rendered}` }} /></h4>
          <p>{firstPost.yoast_head_json.description}</p>
          </div>
        </article>
  
        <div className={styles.storiesListingIn}>       
          {
          users.slice(1).map((item, index) => {
            const { id, title, featured_image, slug, categories_names, acf } = item;
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