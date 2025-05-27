import React from 'react';
import styles from './UpcomingSchedule.module.css';
import { FaHeartPulse, FaEye, FaUserDoctor } from 'react-icons/fa6';

const UpcomingSchedule = () => {
  return (
    <div className={styles.schedule}>
      <h3>The Upcoming Schedule</h3>

      {/* Thursday */}
      <div className={styles.scheduleGroup}>
        <h4 className={styles.dayHeading}>On Thursday</h4>
        <div className={styles.cardRow}>
          <div className={`${styles.scheduleCard} ${styles.cardIndigo}`}>
            <div className={styles.cardHeader}>
              <span>Health checkup complete</span>
              <FaHeartPulse className={styles.cardIcon} />
            </div>
            <div className={styles.cardTime}>11:00 AM</div>
          </div>

          <div className={`${styles.scheduleCard} ${styles.cardIndigo}`}>
            <div className={styles.cardHeader}>
              <span>Ophthalmologist</span>
              <FaEye className={styles.cardIcon} />
            </div>
            <div className={styles.cardTime}>14:00 PM</div>
          </div>
        </div>
      </div>

      {/* Sunday */}
      <div className={styles.scheduleGroup}>
        <h4 className={styles.dayHeading}>On Sunday</h4>
        <div className={styles.cardRow}>
          <div className={`${styles.scheduleCard} ${styles.cardIndigo}`}>
            <div className={styles.cardHeader}>
              <span>Cardiologist</span>
              <FaHeartPulse className={styles.cardIcon} />
            </div>
            <div className={styles.cardTime}>12:00 AM</div>
          </div>

          <div className={`${styles.scheduleCard} ${styles.cardIndigo}`}>
            <div className={styles.cardHeader}>
              <span>Neurologist</span>
              <FaUserDoctor className={styles.cardIcon} />
            </div>
            <div className={styles.cardTime}>16:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
