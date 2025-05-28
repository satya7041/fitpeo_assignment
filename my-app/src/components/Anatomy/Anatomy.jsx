import body from '../../assets/body.png';
import styles from './Anatomy.module.css';
import { healthData} from '../../data/healthData';

const Anatomy = () => {
   return (
    <div className={styles.anatomy}>
      {/* Left: Main Body Image */}
      <div className={styles.card}>
        <img src={body}alt="Main Body" className={styles.mainImage} />
      </div>

      {/* Right: Vertical Cards */}
      <div className={styles.cardsSection}>
        {healthData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageRow}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <h2 className={styles.title}>{item.title}</h2>
            </div>
            <p className={styles.date}>Date: {item.date}</p>

            {/* Rate Bar */}
            <div className={styles[`rateBar${item.title}`]}>
              <div className={styles[`rateFill${item.title}`]} style={{ width: item.rateWidth }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anatomy;
