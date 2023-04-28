// import { Button } from 'components/Button/Button';
import { Box, CardMain } from './Card.styled';
import { ButtonCard } from 'components/Button/Button.styled';
import { Avatar } from 'components/Avatar/Avatar';
import { Info } from 'components/Info/Info';

import axios from 'axios';
import { useState } from 'react';

const fetchData = async () => {
  const data = await axios.get(
    'https://63bf12e0e348cb07622066df.mockapi.io/users'
  );
  console.log(data);
};

fetchData();

export const Card = () => {
  const [tweets, setTweets] = useState();
  const [followers, setFollowers] = useState();
  const [ava, setAva] = useState();

  return (
    <CardMain>
      {/* <Boy></Boy> */}
      <Avatar></Avatar>
      <Box>
        <Info></Info>
        <ButtonCard>Following</ButtonCard>
      </Box>
    </CardMain>
  );
};
