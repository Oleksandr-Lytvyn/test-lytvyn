import axios from 'axios';
import { useEffect, useState } from 'react';

import { Card } from './Card/Card';

export const App = () => {
  const [users, setUsers] = useState([]);
  // const [tweets, setTweets] = useState();
  // const [followers, setFollowers] = useState();
  // const [ava, setAva] = useState();
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        'https://63bf12e0e348cb07622066df.mockapi.io/users'
      );
      setUsers(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return users.map(user => {
    return <Card user={user}></Card>;
  });
};
