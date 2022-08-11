import React from 'react';
import styles from './ContactField.module.css';

import { ReactComponent as Phone } from '../icons/Phone.svg';
import { ReactComponent as Email } from '../icons/Email.svg';

const ContactField = (props) => {
  const { type, text } = props;

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{text}</p>

      {
        // prettier-ignore
        type === 'phone' ?
            <Phone /> :
        type === 'email' ?
            <Email /> :
        ''
      }
    </div>
  );
};

export default ContactField;
