import React from 'react';
import styles from './RejectionReason.module.css';

const RejectionReason = (props) => {
  const { title, text } = props;

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      <div className={styles.reasonWrap}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default RejectionReason;
