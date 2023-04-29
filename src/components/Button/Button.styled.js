import styled from 'styled-components';

export const ButtonCard = styled.button`
  margin-bottom: 36px;
  width: 196px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  background: ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
