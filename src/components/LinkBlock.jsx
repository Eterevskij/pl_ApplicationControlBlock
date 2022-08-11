import React from 'react';
import styles from './LinkBlock.module.css';
import { Button } from 'antd';

import { ReactComponent as Copy } from '../icons/Copy.svg';

const LinkBlock = (props) => {
  const { link, title } = props;

  const clickHandler = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      <div className={styles.linkWrap}>
        <p className={styles.link}>{link}</p>
        <Button className={styles.button} icon={<Copy />} onClick={clickHandler}>
          Копировать ссылку
        </Button>
      </div>
    </div>
  );
};

export default LinkBlock;
