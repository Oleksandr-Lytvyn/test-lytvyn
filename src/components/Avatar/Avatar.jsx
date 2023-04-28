import { AvatarImg, AvatarWrapper } from './Avatar.styled';
import { Line } from './Avatar.styled';

import ava from '../../images/Boy.jpg';

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <Line></Line>
      <AvatarImg></AvatarImg>
    </AvatarWrapper>
  );
};
