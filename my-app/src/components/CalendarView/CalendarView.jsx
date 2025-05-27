import styles from './CalendarView.module.css';
import { FaTooth,FaUserCircle, FaPlus} from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import { scheduleData,dates,days } from '../../data/CalenderData';

const Calendar = () => {
   return (
    <div className={styles.calendarContainer}>

      <div className={styles.header}>
  {/* Top Right: Avatar + Plus icons */}
  <div className={styles.headerTop}>
    <div className={styles.headerIcons}>
      <FaUserCircle size={28} className={styles.avatarIcon} />
      <FaPlus size={18} className={styles.iconButton} />
    </div>
  </div>

  {/* Second Row: Month title and Arrows */}
  <div className={styles.headerBottom}>
    <h2>October 2021</h2>
    <div className={styles.arrows}>
      <button>{'<'}</button>
      <button>{'>'}</button>
    </div>
  </div>
</div>

      {/* Grid container with 7 columns, each column contains weekday and dates */}
      <div className={styles.calendarGrid}>
        {days.map((day, i) => (
          <div
            key={day}
            className={`${styles.calendarColumn} ${day === 'Tues' ? styles.highlightColumn : ''}`}
          >
            {/* Weekday label */}
            <div className={styles.weekdayLabel}>{day}</div>

            {/* Date cell */}
            <div className={styles.dateCell}>
              <span>{dates[i]}</span>
              {scheduleData[day].map((slot, idx) => (
                <div
                  key={idx}
                  className={`${styles.slot} ${slot === '-' ? styles.dash : ''}`}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Appointments below */}
      <div className={styles.appointment}>
  <div className={styles.appointmentCardBlue}>
    <div className={styles.cardContent}>
      <div className={styles.textContent}>
        <strong>Dentist</strong>
        <p>09:00 - 11:00</p>
        <p>Dr. Cameron Williamson</p>
      </div>
      <FaTooth size={20} className={styles.cardIcon} />
    </div>
  </div>

  <div className={styles.appointmentCardPurple}>
    <div className={styles.cardContent}>
      <div className={styles.textContent}>
        <strong>Physiotherapy Appointment</strong>
        <p>11:00 - 12:00</p>
        <p>Dr. Kevin Djones</p>
      </div>
      <GiWeightLiftingUp size={22} className={styles.cardIcon} />
    </div>
  </div>
</div>


      {/* Imported Upcoming Schedule */}
      <UpcomingSchedule />
    </div>
  );
};

export default Calendar;