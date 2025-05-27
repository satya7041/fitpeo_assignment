import styles from "./Sidebar.module.css";
import {
  LayoutDashboard,
  Clock,
  Calendar,
  ClipboardList,
  BarChart2,
  FlaskConical,
  MessageSquare,
  LifeBuoy,
  Settings,
} from "lucide-react";

const generalLinks = [
  { icon: <LayoutDashboard />, label: "Dashboard" },
  { icon: <Clock />, label: "History" },
  { icon: <Calendar />, label: "Calendar" },
  { icon: <ClipboardList />, label: "Appointments" },
  { icon: <BarChart2 />, label: "Statistics" },

];

const toolsLinks = [
  { icon: <MessageSquare />, label: "Chat" },
  { icon: <LifeBuoy />, label: "Support" },
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h1>
        <span className={styles.span1}>Health</span>
        <span className={styles.span2}>care.</span>
      </h1>

      {/* General Section */}
      <h2 className={styles.heading}>General</h2>
      <ul className={styles.navList}>
        {generalLinks.map((link, index) => (
          <li key={index} className={styles.navItem}>
            {link.icon}
            <span>{link.label}</span>
          </li>
        ))}
      </ul>

      {/* Tools Section */}
      <h2 className={styles.heading}>Tools</h2>
      <ul className={styles.navList}>
        {toolsLinks.map((link, index) => (
          <li key={index} className={styles.navItem}>
            {link.icon}
            <span>{link.label}</span>
          </li>
        ))}
      </ul>

      {/* Settings pinned at bottom */}
      <div className={styles.settingsWrapper}>
        <li className={`${styles.navItem} ${styles.settingItem}`}>
          <Settings />
          <span>Setting</span>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
