import styles from './testimonials.module.css'
import { Marque } from '@/components/marquee/Marque'
import Clientavatar from '../../assets/icons/clientAvatar.svg'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Ankit Verma',
      email: 'ankitverma@gmail.com',
      body: 'Sneha’s expertise in SQL and data analytics helped streamline our reporting processes. Her insights were invaluable!',
      img: Clientavatar
    },
    {
      name: 'Neha Singh',
      email: 'nehasingh@gmail.com',
      body: 'Working with Sneha was a great experience. Her data visualization skills using Power BI provided clear business insights.',
      img: Clientavatar
    },
    {
      name: 'Rohit Mehta',
      email: 'rohitmehta@gmail.com',
      body: 'Sneha’s ability to handle large datasets and create predictive models was impressive. Highly recommend her expertise in data science.',
      img: Clientavatar
    }
  ];

  return (
    <div className={styles.testimonialsContainer}>
      <h1 className={styles.heading}>Testimonials</h1>
      <h2 className={styles.subHeading}>Delivering Data-Driven Solutions with Impact</h2>
      <div className={styles.reviews}>
        <Marque reviews={reviews} />
      </div>
    </div>
  )
}

export default Testimonials