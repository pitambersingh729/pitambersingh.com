import styles from './home.module.css'

const Herobanner = () => {
  return(
    <>
      <div className={styles.heroBanner}>
        <h1>Frontend Developer</h1>
        <h2>UI Development For A Digital World</h2>
        <p>I write exceptional code that <br />inspire, engage and deliver results</p>
        <a className="button" href="#">Start A Project</a>
        <a className="button1" href="#">Hire A Skill</a>
      </div>
    </>
  )
}
export default Herobanner;