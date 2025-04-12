import styles from './home.module.css'
import { Link } from 'react-scroll'
import Arrow from '../../assets/icons/arrow.svg';
import Pc from '../../assets/icons/pc.svg';
import Message from '../../assets/icons/message.svg';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.nameSection}>
                <h1>SNEHA</h1>
                <p>Sneha Prasad</p>
            </div>

            <div className={styles.textSection}>
                <h1>Turning Data into Intelligent Solutions</h1>
                <p>
                    I am a <strong>Data Enthusiast</strong> with expertise in <strong>SQL, Python, MySQL, Power BI, and Tableau</strong>. Passionate about leveraging data-driven insights to optimize business decisions.
                </p>
                <Link
                    className={styles.linkToExperience}
                    to="experience"
                    smooth={true}
                    duration={500}
                >Explore My Work <img src={Arrow} alt="arrow" /></Link>
            </div>

            <div className={styles.serviceSection}>
                <div className={styles.imageContainer}>
                    <img src={Pc} alt="pc" />
                </div>
                <p className={styles.text}>Specialized in SQL, Power BI, Tableau, and Machine Learning solutions for businesses.</p>
            </div>

            <div className={styles.contactSection}>
                <p className={styles.text}>Looking for a <strong>data-driven solution?</strong> Let&apos;s connect and discuss how I can help.</p>
                <div className={styles.imageContainer}>
                    <img src={Message} alt="message" />
                </div>
            </div>
        </div>
    )
}

export default Home