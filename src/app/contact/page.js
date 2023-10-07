//import Link from 'next/link';
import styles from './contact.module.css'

const Contact = () => {
  return (
    <>
      <section className={styles.contactPage}>
        <div className="container">
          <nav>
            <ol className={styles.cdbreadcrumb}>
              <li><a href="index.html">Home</a></li>
              <li className={styles.current}><em>Contact</em></li>
            </ol>
          </nav>		
          <div className={styles.contactTop}>
            <h1>Hey there!</h1>
            <h2>I am more than happy to have a conversation</h2>
          </div>

          <form>
            <span>Your Details</span>
            <div className={styles.formContactJustify}>
              <div className={styles.formGroup}>
                <input type="text" className={styles.textField} placeholder="Your Name" />
              </div>
              <div className={styles.formGroup}>
                <input type="text" className={styles.textField} placeholder="Your Email" />
              </div>
              <div className={styles.formGroup}>
                <input type="text" className={styles.textField} placeholder="Your Phone" />
              </div>
            </div>

            <span>Your Requirement</span>
            <div className={styles.formGroup}>
              <textarea className={styles.textAreaField} placeholder="How can I help?"></textarea>
            </div>

            <button className={styles.button}>Send Enquiry</button>
          </form>		
        </div>
      </section>      
    </>
  )
}

export default Contact;