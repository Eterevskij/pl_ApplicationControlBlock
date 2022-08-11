import React from 'react';
import styles from './ApplicationControlItem.module.css';

import UserInfoItem from './UserInfoItem';
import Button from './ApplicationControlItem__buttons';
import Status from './Status';
import LinkBlock from './LinkBlock';
import RejectionReason from './RejectionReason';
import PropertyBlock from './PropertyBlock';

import { ReactComponent as Calendar } from '../icons/Calendar.svg';
import { ReactComponent as Refresh } from '../icons/Refresh.svg';
import { ReactComponent as Chat } from '../icons/Chat.svg';
import { ReactComponent as Edit } from '../icons/Edit.svg';
import { ReactComponent as Trashbin } from '../icons/Trashbin.svg';
import { ReactComponent as Deal } from '../icons/Deal.svg';
import { ReactComponent as Eye } from '../icons/Eye.svg';
import { ReactComponent as Success } from '../icons/Success.svg';
import { ReactComponent as Warning } from '../icons/Warning.svg';
import { ReactComponent as Coins } from '../icons/Coins.svg';
import { ReactComponent as Documents } from '../icons/Documents.svg';

const buttons = {
  publish: { type: 'primary', text: 'Опубликовать' },
  publish__disabled: { type: 'primary', text: 'Опубликовать', bgColor: '#BCBEC0' },
  chat: { type: 'regular', text: 'Чат', Icon: <Chat /> },
  edit: { type: 'regular', text: 'Редактировать', Icon: <Edit /> },
  delete: { type: 'regular', text: 'Удалить', Icon: <Trashbin /> },
  dealStatus: { type: 'primary', text: 'Статус сделка', bgColor: '#1F9BD0', Icon: <Deal /> },
  removeFromPublication: { type: 'regular', text: 'Снять с публикации', Icon: <Eye /> },
  completeTheDeal: {
    type: 'primary',
    text: 'Завершить сделку',
    Icon: <Success />,
    bgColor: '#2B2B2B',
  },
  changeDealData: { type: 'regular', text: 'Изменить данные сделки', Icon: <Edit /> },
};

const cardsTypes = {
  draft: {
    status: { textColor: '#4F4F4F', bgColor: '#F4F4F4', text: 'Черновик' },
    buttons: [buttons.publish, buttons.chat, buttons.edit, buttons.delete],
  },
  takenByHand: {
    status: { textColor: '#ECAA00', bgColor: '#FDF6E3', text: 'Снято вручную' },
    buttons: [buttons.publish, buttons.chat, buttons.edit, buttons.delete],
  },
  draft__warning: {
    status: { textColor: '#4F4F4F', bgColor: '#F4F4F4', text: 'Черновик' },
    buttons: [buttons.publish__disabled, buttons.chat, buttons.edit, buttons.delete],
    warning: true,
  },
  active: {
    status: { textColor: '#4DB663', bgColor: '#EDFAF1', text: 'Активно' },
    buttons: [
      buttons.dealStatus,
      buttons.chat,
      buttons.edit,
      buttons.removeFromPublication,
      buttons.delete,
    ],
  },
  deal: {
    status: { textColor: '#1F9BD0', bgColor: '#EBF7FF', text: 'Сделка' },
    buttons: [buttons.completeTheDeal, buttons.chat, buttons.changeDealData],
  },
  successfullyCompleted: {
    status: { textColor: '#7A7A7A', bgColor: '#F4F4F4', text: 'Успешно завершена' },
    buttons: [],
    linkBlock: true,
    hasProperties: true,
  },
  unsuccessfullyCompleted: {
    status: { textColor: '#F44F5A', bgColor: '#FDE9EB', text: 'Неуспешно завершена' },
    buttons: [],
    showReason: true,
    hasPeriod: true,
    hasProperties: true,
  },
};

const ApplicationControlItem = (props) => {
  debugger;
  const { type, data } = props;
  const currentCardType = cardsTypes[type];
  const { status, hasPeriod } = currentCardType;
  const {
    id,
    users,
    firstDate,
    secondDate,
    warningText,
    link,
    rejectionReasonText,
    hasProperties,
  } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.statusWrapper}>
              <Status text={status.text} textColor={status.textColor} bgColor={status.bgColor} />
            </div>
            {hasPeriod ? (
              <DateItem Icon={<Calendar />} text={`${firstDate} — ${secondDate}`} />
            ) : (
              <>
                <DateItem Icon={<Calendar />} text={firstDate} />
                <DateItem Icon={<Refresh />} text={secondDate} />
              </>
            )}
          </div>

          <h5 className={styles.title}>Управление заявкой — ID {id}</h5>
        </div>

        <div className={styles.right}>
          {hasProperties ? (
            <>
              <div className={styles.propertyBlockWrapper}>
                <PropertyBlock
                  title={'540 000 ₽'}
                  subtitle="Задаток"
                  Icon={<Coins />}
                  needFormating={true}
                />
              </div>

              <div className={styles.propertyBlockWrapper}>
                <PropertyBlock
                  title={'Скан расписки'}
                  subtitle="Документ"
                  Icon={<Documents />}
                  needFormating={true}
                  isLink={true}
                />
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>

      <div className={styles.userInfoWrapper}>
        {users.map((user) => {
          return <UserInfoItem {...user} />;
        })}
      </div>

      {currentCardType?.warning && (
        <div className={styles.warningWrapper}>
          <Warning />
          <p className={styles.warningText}>{warningText}</p>
        </div>
      )}

      {currentCardType?.showReason && (
        <div className={styles.reasonBlockWrapper}>
          <RejectionReason
            title="Сделка завершена неуспешно по причине:"
            text={rejectionReasonText}
          />
        </div>
      )}

      {currentCardType?.linkBlock && (
        <div className={styles.linkBlockWrapper}>
          <LinkBlock
            title="Вы можете отправить ссылку клиенту чтобы он оставил отзыв о вашей работе"
            link={link}
          />
        </div>
      )}

      {currentCardType.buttons.length ? (
        <div className={styles.buttonsWrapper}>
          {currentCardType.buttons.map((item) => {
            return (
              <div className={styles.buttonItemWrapper}>
                <Button {...item} />
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const DateItem = (props) => {
  const { Icon, text } = props;

  return (
    <div className={`${styles.dateItem} ${styles.leftTopItem}`}>
      {Icon}
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ApplicationControlItem;
