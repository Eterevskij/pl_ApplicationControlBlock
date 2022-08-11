import React from 'react';
import styles from './PropertyBlock.module.css';

import { ReactComponent as LinkArrow } from '../icons/LinkArrow.svg';

const PropertyBlock = (props) => {
  let { Icon, title, isLink, subtitle } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>{Icon}</div>

      <div className={styles.textWrapper}>
        <p className={styles.subtitle}>{subtitle}</p>
        {isLink ? (
          <span className={styles.linkWrapper}>
            <p className={styles.link}>{title}</p>
            <LinkArrow />
          </span>
        ) : (
          <p className={styles.title}>{title}</p>
        )}
      </div>
    </div>
  );
};

export default PropertyBlock;
