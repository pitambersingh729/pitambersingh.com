import Image from 'next/image'
import Link from 'next/link';
import styles from './home.module.css'

async function WebStoriesAPI() {
  const response = await fetch("https://pitambersingh.in/wp-json/custom/v1/web-stories");
  if (!response.ok) {
    throw new Error('failed to fetch users')
  }
  return await response.json()
}

export default async function WebStories({ data }) {  
  const users = await WebStoriesAPI();
  return(
    <>
      <div className={styles.projectList}>
        <div className={styles.container}>
        <h3 className={styles.heading}><span>Spotlight</span></h3>
          <ul>
            {
            users.map((item, index) => {
              const { id, title, featured_image, published_date, slug} = item;
                return (
                  <>
                  <li>
                    <Image
                      src={featured_image}
                      width={360}
                      height={480}
                      quality={70}
                      alt="Image"
                      priority
                    />
                    <div className={styles.workInfo}>
                      <span>{published_date}</span>
                      <p>{title}</p>
                    </div>
                  </li>                
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}