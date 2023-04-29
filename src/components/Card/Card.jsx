// import { Button } from 'components/Button/Button';
import { Box, CardMain } from './Card.styled';
import { ButtonCard } from 'components/Button/Button.styled';
import { Avatar } from 'components/Avatar/Avatar';
import { Info } from 'components/Info/Info';
import { useState } from 'react';

export const Card = ({ user }) => {
  const checkFollow = JSON.parse(localStorage.getItem(user.id));
  // console.log(checkFollow);
  const [isFollow, setIsFollow] = useState(checkFollow);

  let followers = user.followers;
  if (isFollow) {
    followers += 1;
  }

  const onClick = () => {
    setIsFollow(!isFollow);
    localStorage.setItem(user.id, JSON.stringify(!isFollow));
  };

  return (
    <CardMain>
      {/* <Boy></Boy> */}
      <Avatar url={user.avatar}></Avatar>
      <Box>
        <Info tweets={user.tweets} followers={followers}></Info>
        <ButtonCard isFollow={isFollow} onClick={onClick}>
          {isFollow ? 'Following' : 'Follow'}
        </ButtonCard>
      </Box>
    </CardMain>
  );
};
