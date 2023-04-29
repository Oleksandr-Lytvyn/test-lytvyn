import styled from 'styled-components';

import elipse from '../../images/Ellipse-crop.png';

export const AvatarWrapper = styled.div`
  margin-bottom: 26px;
  border-radius: 20px;
  background-size: cover;
  position: relative;
  top: 50%;
  transform: translate(0, 0);

  width: 100%;
`;

export const Line = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  position: absolute;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${elipse}), url(${props => props.url});
  background-size: cover, 80%;
  background-position: center;
`;
