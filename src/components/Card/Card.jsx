// import { Button } from 'components/Button/Button';
import { Box, CardMain } from './Card.styled';
import { ButtonCard } from 'components/Button/Button.styled';
import { Avatar } from 'components/Avatar/Avatar';
import { Info } from 'components/Info/Info';
import { useState } from 'react';

export const Card = ({ user }) => {
  const [isFollow, setIsFollow] = useState(false);

  let followers = user.followers;
  if (isFollow) {
    followers += 1;
  }

  return (
    <CardMain>
      {/* <Boy></Boy> */}
      <Avatar url={user.avatar}></Avatar>
      <Box>
        <Info tweets={user.tweets} followers={followers}></Info>
        <ButtonCard isFollow={isFollow}>Following</ButtonCard>
      </Box>
    </CardMain>
  );
};
