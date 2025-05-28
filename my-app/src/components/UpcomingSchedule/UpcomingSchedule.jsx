import React from 'react';
import styles from './UpcomingSchedule.module.css';
import { FaHeartPulse, FaEye, FaUserDoctor } from 'react-icons/fa6';
import { upcomingSchedule } from '../../data/UpcomingSchedule';

const UpcomingSchedule = () => {
  return (
    <div className={styles.schedule}>
      <h3>The Upcoming Schedule</h3>

      {upcomingSchedule.map((scheduleDay, index) => (
        <div key={index} className={styles.scheduleGroup}>
          <h4 className={styles.dayHeading}>On {scheduleDay.day}</h4>
          <div className={styles.cardRow}>
            {scheduleDay.events.map((event, eventIndex) => {
              // Dynamically import the icon based on the string value
              const Icon = event.icon === 'FaHeartPulse' ? FaHeartPulse :
                          event.icon === 'FaEye' ? FaEye :
                          FaUserDoctor;

              return (
                <div key={eventIndex} className={`${styles.scheduleCard} ${styles.cardIndigo}`}>
                  <div className={styles.cardHeader}>
                    <span>{event.title}</span>
                    <Icon className={styles.cardIcon} />
                  </div>
                  <div className={styles.cardTime}>{event.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
