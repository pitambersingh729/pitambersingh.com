import Image from 'next/image'
import styles from './Footer.css'
const Footer = () =>{
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="widgetBlock">
                        <h4>About</h4>
                        {/* <p>Collaborate with our Highly Skilled Professionals to Create User-centric Solutions and Drive Business Growth</p> */}
                    </div>
                    <div className="widgetBlock">
                        <h4>Skills</h4>
                        {/* <ul>
                            <li><a href="#">HTML5</a></li>
                            <li><a href="#">CSS3</a></li>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Google AMP</a></li>
                        </ul> */}
                    </div>
                    <div className="widgetBlock">
                        <h4>Blogs</h4>
                        {/* <ul>
                            <li><a href="#">React JS</a></li>
                            <li><a href="#">Next JS</a></li>
                            <li><a href="#">Web Stories</a></li>
                            <li><a href="#">Javascript</a></li>
                        </ul> */}
                    </div>
                    <div className="widgetBlock">
                        <h4>Latest Stories</h4>
                        {/* <ul>
                            <li><a href="#">How To Get API Data In React JS And Display It On The Frontend?</a></li>
                            <li><a href="#">What Is The Difference Between React JS And React Native?</a></li>
                            <li><a href="#">What Is Routing In React JS And How Does It Work?</a></li>
                            <li><a href="#">How To Add Types To Props And States Using TypeScript In React JS</a></li>
                        </ul> */}
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="container">
                        <span className="copyright">&#169; 2024, Pitamber Singh. All Rights Reserved.</span>
                        <div className="connect">
                            {/* <span>Connect:</span> */}
                            <ul>
                                <li><a href="#"><Image src="/facebook.svg" quality={80} width={32} height={32} alt="Facebook" /></a></li>
                                <li><a href="#"><Image src="/instagram.svg" quality={80} width={32} height={32} alt="Instagram" /></a></li>
                                <li><a href="#"><Image src="/github.svg" quality={80} width={32} height={32} alt="GitHub" /></a></li>
                                <li><a href="#"><Image src="/slack.svg" quality={80} width={32} height={32} alt="Slack" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>         
        </>
    )
}

export default Footer;