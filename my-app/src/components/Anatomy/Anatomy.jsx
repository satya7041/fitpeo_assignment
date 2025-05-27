import React from 'react';
import body from '../../assets/body.png';
import lung from '../../assets/lung.png';
import teeth from '../../assets/teeth.png';
import bone from '../../assets/bone.png';
import styles from './Anatomy.module.css';

const Anatomy = () => {
  return (
    <div className={styles.anatomy}>
      {/* Left: Main Body Image */}
      <div className={styles.card}>
        <img src={body} alt="Main Body" className={styles.mainImage} />
      </div>

      {/* Right: Vertical Cards */}
      <div className={styles.cardsSection}>
        <div className={styles.card}>
           <div className={styles.imageRow}>
    <img src={lung} alt="Lung" className={styles.image} />
    <h2 className={styles.title}>Lungs</h2>
  </div>
            <p className={styles.date}>Date: 26 Oct, 2021</p>
            {/* Rate Bar */}
            <div className={styles.rateBarLung}>
              <div className={styles.rateFillLung} style={{ width: '70%' }}></div>
            </div>
        
        </div>

        <div className={styles.card}>
           <div className={styles.imageRow}>
             <img src={teeth} alt="Teeth" className={styles.image} />
            <h2 className={styles.title}>Teeth</h2>
            </div>
            <p className={styles.date}>Date: 26 Oct, 2021</p>
            <div className={styles.rateBarTeeth}>
              <div className={styles.rateFillTeeth} style={{ width: '70%' }}></div>
           
          </div>
        </div>

        <div className={styles.card}>
           <div className={styles.imageRow}>
          <img src={bone} alt="Bone" className={styles.image} />
            <h2 className={styles.title}>Bone</h2>
            </div>
            <p className={styles.date}>Date: 26 Oct, 2021</p>
            <div className={styles.rateBarBone}>
              <div className={styles.rateFillBone} style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anatomy;
