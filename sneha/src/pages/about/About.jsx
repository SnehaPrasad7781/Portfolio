import styles from './about.module.css'
import { useState } from 'react'
import Mypic from '../../assets/images/profilepic.jpg'

const About = () => {

  const faqs = [
    {
      question: "Who I am?",
      answer: "I'm a data science enthusiast specializing in SQL, Python, MySQL, Power BI, and Tableau. I love transforming raw data into meaningful insights to drive smarter business decisions."
    },
    {
      question: "What I Provide?",
      answer: "I offer data-driven solutions, including data analytics, machine learning models, business intelligence dashboards, and database management. My goal is to turn data into actionable insights."
    },
    {
      question: "How I do it?",
      answer: "I use structured query language (SQL) for data extraction, Python for analysis, and tools like Power BI & Tableau for visualization. My approach is analytical, structured, and insight-focused."
    },
    {
      question: "What I learnt?",
      answer: "I've gained expertise in database management, data analytics, and predictive modeling. Continuous learning in AI, ML, and data visualization keeps me at the forefront of technology."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>About Me</h1>
      <h2 className={styles.subHeading}>Wanna Know Me?</h2>

      <div className={styles.aboutNavbar}>
        {faqs.map((faq, index) => (
          <p className={`${styles.question} ${activeIndex === index ? styles.activeQuestion : ""}`} key={index} onClick={() => setActiveIndex(index)}>
            {faq.question}
          </p>
        ))}
      </div>

      <div className={styles.displayContent}>
        <div className={styles.imageContainer}>
          <img src={Mypic} alt="My Image" />
        </div>
        <div className={styles.infoContainer}>
          {faqs.map((faq, index) => (
            activeIndex === index && (
              <p key={index} className={styles.answer}>
                {faq.answer}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default About