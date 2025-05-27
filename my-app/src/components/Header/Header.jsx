import styles from "./Header.module.css";
import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={20} color="#888" />
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            readOnly
          />
        </div>
        <div className={styles.bellWrapper}>
          <Bell className={styles.icon} size={24} color="#0d3283" />
        </div>
      </div>
    </header>
  );
};

export default Header;
