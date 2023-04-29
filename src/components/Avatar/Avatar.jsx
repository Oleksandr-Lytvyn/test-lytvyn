import { AvatarImg, AvatarWrapper } from './Avatar.styled';
import { Line } from './Avatar.styled';

export const Avatar = ({ url }) => {
  return (
    <AvatarWrapper>
      <Line></Line>
      <AvatarImg url={url}></AvatarImg>
    </AvatarWrapper>
  );
};
