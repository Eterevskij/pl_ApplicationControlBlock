import React from 'react';
import styles from './UserInfoItem.module.css';

import UserInfoBlock from './MainUserInfo';
import ContactField from './ContactField';

const rolesDescriptions = {
  client: 'Мой клиент',
  buyer: 'Покупатель',
  realtor: 'Риэлтор со стороны покупателя',
};

const UserInfoItem = (props) => {
  const { contacts, name, role, id } = props;

  const rolesDescription = rolesDescriptions[role];

  let isPrimary;

  if (role === 'buyer' || role === 'realtor') {
    isPrimary = true;
  } else {
    isPrimary = false;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <UserInfoBlock
          name={name}
          isPrimary={isPrimary}
          role={`${rolesDescription} ${!isPrimary ? `— ID ${id}` : ''}`}
        />
      </div>

      <div className={styles.right}>
        <div className={styles.contactFieldsWrapper}>
          {contacts.map((item) => {
            return (
              <div className={styles.contactFieldsItem}>
                <ContactField type={item.type} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInfoItem;
