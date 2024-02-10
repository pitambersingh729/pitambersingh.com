import Image from "next/image";
import Link from "next/link";
import styles from './page.css'

async function HomepagePostsAPI(id) {
  const response = await fetch(`https://xypherspot.com/api/wp-json/wp/v2/posts/${id}`);
  if (!response.ok) {
    throw new Error('failed to fetch users')
  }
  return await response.json()
}


export default async function HomepageListing({ params: { id } }) {
  const userData = await HomepagePostsAPI(id);
  const publishTime  = userData.yoast_head_json.article_published_time;
  const modifyTime  = userData.yoast_head_json.article_modified_time;
  const publishedDate = new Date(publishTime).toLocaleString(
    "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
  );
  const modifiedDate = new Date(modifyTime).toLocaleString(
    "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
  );
  
  return (
    <section className="blogpage">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blogs">{userData.categories_names}</Link></li>
            <li dangerouslySetInnerHTML={{ __html: `${userData.title.rendered}` }} />
          </ul>
        </div>
        <div className="storyLeft">
          <span className="catName"></span>
          <div className="clearfix"></div>
          <h1 className="articleTitle" dangerouslySetInnerHTML={{ __html: `${userData.title.rendered}` }} />
          <div className="articleShareInfo">
            <span>{userData.yoast_head_json.author}</span> 
            <span>
              {modifiedDate 
              ? "Updated " + modifiedDate 
              : "Posted " + publishedDate} 
            </span>
          </div>
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
              <figcaption></figcaption>
            </div>
            <div className="entryContent" dangerouslySetInnerHTML={{ __html: `${userData.content.rendered}` }} />
          </div>
          <div className="articleTags">{userData.tags}</div>
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata({ params: { id } }) {
  const userData = await HomepagePostsAPI(id);
  const title = userData.title.rendered + " - Pitamber Singh";
  const description = userData.yoast_head_json.description;
  const keywords = userData.acf.meta_keywords;
  const slug = userData.slug;
  //const schema = userData.yoast_head_json.schema.breadcrumb;
  return{
    metadataBase: new URL('https://pitambersingh.com'),
    title:title,
    description:description,
    keywords: keywords,
    openGraph:{
      images:userData.featured_image
    },
    twitter:{
      card:"summary_large_image",
      title:userData.title.rendered,
      description:userData.yoast_head_json.description,
    }
  }
}