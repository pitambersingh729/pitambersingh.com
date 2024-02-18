import styles from './home.module.css'

const WebVitals = () => {
  return(
    <>
      <div className={styles.webVitalsNumber}>
        <h3>You will experience <span>magical</span> Google Page Speed numbers with me</h3>
        <ul>
          <li><p>Upto <small>90%</small> Page Speed</p></li>
          <li><p>LCP Under <small>2.0</small></p></li>
          <li><p>CLS Less Than <small>0.05</small></p></li>
          {/* <li><p>FID <small>30 - 50</small></p></li> */}
          <li><p>INP <small>50 - 120</small></p></li>
        </ul>
      </div>
    </>
  )
}
export default WebVitals;