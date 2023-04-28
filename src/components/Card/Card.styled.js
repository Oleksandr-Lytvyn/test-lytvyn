import styled from 'styled-components';
import logo from '../../images/Logo.svg';
import bgImage from '../../images/picture.png';

export const CardMain = styled.div`
  width: 380px;
  height: 460px;
  background-image: url(${logo}), url(${bgImage}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: 20px 20px, 50% 28px, 0;
`;
