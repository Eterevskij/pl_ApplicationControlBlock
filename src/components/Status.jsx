import styled from 'styled-components';

const StatusTemplate = styled.p`
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 6px;
  background: ${(props) => props.bgColor || '#f4f4f4'};
  color: ${(props) => props.textColor || '#f4f4f4'};
  width: -moz-fit-content;
  width: fit-content;
  font-weight: 700;
`;

const Status = (props) => {
  const { text } = props;

  return <StatusTemplate {...props}>{text}</StatusTemplate>;
};

export default Status;
