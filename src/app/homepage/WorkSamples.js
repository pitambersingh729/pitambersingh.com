import Image from 'next/image'
import styles from './home.module.css'
import Thumbnail from './../images/thumbnail.jpg'

const WorkSamples = () => {
  return(
    <>
      <div className={styles.workSamples}>
        <div className={styles.container}>
          <h3 className={`${styles.heading} ${styles.heading1}`}>
            <span>Check The Projects</span>
          </h3>
          <ul className={styles.workSamplesList}>
            <li className={styles.active}>Healthshots</li>
            <li>Nexa Experience</li>
            <li>Unsere Alpen</li>
            <li>Opus</li>
            <li>Livemint</li>
            <li>Hindustan Times</li>
            <li>Arena</li>
          </ul>
          <div className={styles.workSamplesIn}>
            <div className={styles.projectImage}>
            <Image
							src={Thumbnail}
							alt="Thumbnail"
							width={358}
							height={242}
						/>
            </div>
            <div className={styles.projectDescriptions}>
              <h3>Nexa <span>Experience</span></h3>
              <p>NEXA is your one-stop destination for Maruti Suzuki premium &amp; luxury Sedan and Hatchback cars in India. Get details on NEXA car price, models, dealers &amp; new upcoming cars!</p>
              <a href="#" className={styles.viewProject}>View Project</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WorkSamples;