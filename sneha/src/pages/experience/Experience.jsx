import styles from './experience.module.css';
import { useState } from 'react';
import CafeSales from '../../assets/images/cafesales.jpg';
import ETLPipeline from '../../assets/images/etl.png';
import HRInsights from '../../assets/images/hrinsights.png';
import Left from '../../assets/icons/leftarrow.svg';
import Right from '../../assets/icons/rightarrow.svg';

const Experience = () => {
    const experience = [
        {
            title: 'Cafe Sales Analysis',
            image: CafeSales,
            description: 'Analyzed cafe sales performance and customer behavior using MySQL and Python. Implemented real-time inventory tracking with Tableau visualization and automated low-stock email alerts.',
            techStack: 'Python, MySQL, Tableau, Excel, ARIMA Forecasting',
        },
        {
            title: 'Real-Time ETL Pipeline',
            image: ETLPipeline,
            description: 'Built a real-time ETL pipeline to automate sales, inventory, and expense data integration into a MySQL database. Used Power BI for interactive visualizations and SQL queries for data-driven insights.',
            techStack: 'Power BI, MySQL, Python, SQL Connector',
        },
        {
            title: 'HR Data Insights',
            image: HRInsights,
            description: 'Analyzed HR database to extract insights on employee management, salaries, and job roles. Applied SQL joins, subqueries, and analytical functions for advanced reporting.',
            techStack: 'MySQL',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experience.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + experience.length) % experience.length);
    };

    const getImageIndex = (index) => {
        return (index + experience.length) % experience.length;
    };

    return (
        <div className={styles.experienceContainer}>
            <h1 className={styles.heading}>Projects</h1>
            <h2 className={styles.subHeading}>Leveraging data to drive business intelligence and insights.</h2>

            <div className={styles.carouselSection}>
                <div className={styles.imageContainer}>
                    <img onClick={prevSlide} src={experience[getImageIndex(currentIndex - 1)].image} alt={experience[getImageIndex(currentIndex - 1)].title} />

                    <img src={experience[currentIndex].image} alt={experience[currentIndex].title} />

                    <img onClick={nextSlide} src={experience[getImageIndex(currentIndex + 1)].image} alt={experience[getImageIndex(currentIndex + 1)].title} />
                </div>

                <div className={styles.buttonContainer}>
                    <img onClick={prevSlide} className={styles.prevButton} src={Left} alt="left" />

                    <h4>{experience[currentIndex].title}</h4>

                    <img onClick={nextSlide} className={styles.nextButton} src={Right} alt="right" />
                </div>

                <div className={styles.projectDetails}>
                    <p className={styles.description}>{experience[currentIndex].description}</p>
                    <p className={styles.techStack}><strong>Tech Stack:</strong> {experience[currentIndex].techStack}</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
