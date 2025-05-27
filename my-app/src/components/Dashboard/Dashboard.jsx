import styles from './Dashboard.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import CalenderView from '../CalendarView/CalendarView';

import Anatomy from '../Anatomy/Anatomy';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.contentArea}>
        <Header />
        <h2 className={styles.h2name}>Dashboard</h2>
        <Anatomy />
        <ActivityFeed />
      </div>

      <div className={styles.calendar}>
        <CalenderView />
      </div>
    </div>
  );
}

export default Dashboard;
