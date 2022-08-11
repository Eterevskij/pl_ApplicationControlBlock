import React from 'react';
import styles from './MainUserInfo.module.css';

const MainUserInfo = (props) => {
  const { role, name, photo, isPrimary } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.photoWrapper}>
          {photo ? (
            <img src={photo} />
          ) : (
            <div className={`${styles.photoPlug} ${isPrimary ? styles.primary : ''}`}>
              <p className={styles.photoPlug__text}>
                {name.first[0]}
                {name.middle[0]}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.role}>{role}</p>
        <p className={styles.name}>{`${name.first}
                                            ${name.middle}
                                            ${name.last}`}</p>
      </div>
    </div>
  );
};

export default MainUserInfo;
