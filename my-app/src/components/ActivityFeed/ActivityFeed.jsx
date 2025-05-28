import React from 'react';
import { data, days } from '../../data/ActivityData';  // Import data and days
import styles from './ActivityFeed.module.css';

const ActivityFeed = () => {
  return (
    <div className={styles.activitySection}>
      <div className={styles.header}>
        <h3>Activity</h3>
        <span className={styles.subtext}>3 appointments on this week</span>
      </div>
      <div className={styles.chart}>
        {data.map((barGroup, idx) => {
          const hasStacked25 = barGroup.length === 5 && barGroup[2] === 25 && barGroup[3] === 25;
          return (
            <div key={idx} className={styles.dayGroup}>
              <div className={styles.bars}>
                {/* 1st bar (left aligned) */}
                <div
                  className={`${styles.bar} ${0 === 1 ? styles.primary : styles.secondary}`}
                  style={{ height: `${barGroup[0]}px` }}
                />

                {/* 2nd bar (centered) */}
                <div style={{ margin: '0 auto' }}>
                  <div
                    className={`${styles.bar} ${1 === 1 ? styles.primary : styles.secondary}`}
                    style={{ height: `${barGroup[1]}px` }}
                  />
                </div>

                {/* 3rd and 4th bars stacked vertically if Monday */}
                {hasStacked25 ? (
                  <div className={styles.verticalStack}>
                    <div
                      className={`${styles.bar} ${styles.secondary}`}
                      style={{ height: `${barGroup[2]}px` }}
                    />
                    <div
                      className={`${styles.bar} ${styles.secondary}`}
                      style={{ height: `${barGroup[3]}px` }}
                    />
                  </div>
                ) : (
                  <>
                    {barGroup[2] !== undefined && (
                      <div
                        className={`${styles.bar} ${2 === 1 ? styles.primary : styles.secondary}`}
                        style={{ height: `${barGroup[2]}px` }}
                      />
                    )}
                    {barGroup[3] !== undefined && (
                      <div
                        className={`${styles.bar} ${3 === 1 ? styles.primary : styles.secondary}`}
                        style={{ height: `${barGroup[3]}px` }}
                      />
                    )}
                  </>
                )}

                {/* Last bar (right aligned) */}
                <div style={{ marginLeft: 'auto' }}>
                  {barGroup[4] !== undefined && (
                    <div
                      className={`${styles.bar} ${4 === 1 ? styles.primary : styles.secondary}`}
                      style={{ height: `${barGroup[4]}px` }}
                    />
                  )}
                </div>
              </div>
              <span className={styles.dayLabel}>{days[idx]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
