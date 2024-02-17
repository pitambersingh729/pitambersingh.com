import Image from "next/image";
import Link from "next/link";
import styles from './page.css'

async function HomepagePostsAPI(id) {
  const response = await fetch(`https://xypherspot.com/api/wp-json/custom/v1/web-stories/${id}`);
  if (!response.ok) {
    throw new Error('failed to fetch users')
  }
  return await response.json()
}


export default async function HomepageListing({ params: { id } }) {
  const userData = await HomepagePostsAPI(id);
  return (
    <section className="blogpage">
      <div className="container">
        <div className="storyLeft">
          <span className="catName"></span>
          <div className="clearfix"></div>
          <h1 className="articleTitle" dangerouslySetInnerHTML={{ __html: `${userData.title}` }} />
          <div className="entryContent">
            <div className="featuredImage">
              <Image
                src={userData.featured_image}
                width={770}
                height={436}
                quality={80}
                alt="Image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}