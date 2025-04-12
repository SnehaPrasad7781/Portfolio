import styles from './footer.module.css'
import { Link } from 'react-scroll'
import Whatsapp from '../../assets/icons/whatsapp.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Avatar from '../../assets/icons/avatar.svg'
import Github from '../../assets/icons/github.svg'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.links}>
                <div className={styles.navLinks}>
                    <h3 className={styles.title}>Quick Links</h3>
                    {['Home', 'About', 'Experience'].map((text, index) => (
                        <Link className={styles.sectionLink} key={index} to={text.toLowerCase()} smooth duration={500}>{text}</Link>
                    ))}
                </div>

                <div className={styles.socialHandles}>
                    <h3 className={styles.title}>Connect</h3>
                    <div>
                        {[
                            { name: Whatsapp, link: 'https://wa.me/918077941299' },
                            { name: Linkedin, link: 'https://www.linkedin.com/in/sneha-prasad-037576252/' },
                            { name: Github, link: 'https://github.com/SnehaPrasad7781' },
                            // { name: Instagram, link: 'https://www.instagram.com/belong2sky?igsh=N3gyc2N0djI2OW92' },
                            { name: Avatar, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=snehaprasad0501@gmail.com' },
                        ].map((social, index) => (
                            <a target='_blank' className={styles.socialLink} key={index} href={social.link}><img src={social.name} alt={social.name} /></a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.textSection}>
                <h1 className={styles.title}>Transforming Data into Intelligent Solutions</h1>
                <h2>Sneha Prasad</h2>
            </div>
        </div>
    )
}

export default Footer