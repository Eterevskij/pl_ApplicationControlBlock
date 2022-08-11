import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const ButtonTemplate = styled(Button)`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  width: fit-content;
  padding: 12px 18px;

  &.withIcon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.withIcon span {
    margin-left: 12px;
  }

  &[disabled] {
    opacity: 0.56;
  }
`;

const PrimaryStyled = styled(ButtonTemplate)`
  border: none;
  padding: 12px 24px;
  background: ${(props) => props.bgColor || '#4db663'} !important;
  color: #fff !important;
  font-size: ${(props) => props.fontSize || 16}px;
  font-weight: 700;
`;

const OrdinaryStyled = styled(ButtonTemplate)`
  color: #2b2b2b !important;
  background: #fff !important;
  border: 1px solid #bcbec0 !important;

  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;

const StatusStyled = styled(ButtonTemplate)`
  border: none;
  background: ${(props) => props.bgColor || '#fff'} !important;
  color: #2b2b2b !important;
  font-size: 16px;
`;

const Primary = (props) => {
  const { text, fontSize, Icon, disabled, bgColor } = props;

  return (
    <PrimaryStyled
      className={Icon && 'withIcon'}
      fontSize={fontSize}
      disabled={disabled}
      bgColor={bgColor}>
      {Icon} {text}
    </PrimaryStyled>
  );
};

const Regular = (props) => {
  debugger;

  const { text, Icon, fontSize, disabled } = props;

  return (
    <OrdinaryStyled className={Icon && 'withIcon'} fontSize={fontSize} disabled={disabled}>
      {Icon} {text}
    </OrdinaryStyled>
  );
};

const Status = (props) => {
  const { text, Icon, bgColor, iconColor, disabled } = props;

  return (
    <StatusStyled
      className={Icon && 'withIcon'}
      iconColor={iconColor}
      bgColor={bgColor}
      disabled={disabled}>
      {Icon} {text}
    </StatusStyled>
  );
};

const ApplicationControlItem__buttons = (props) => {
  const { type } = props;

  if (type === 'regular') {
    return <Regular {...props} />;
  } else if (type === 'status') {
    return <Status {...props} />;
  } else if (type === 'primary') {
    return <Primary {...props} />;
  }
};

export default ApplicationControlItem__buttons;
