import axios from 'axios';
import { useEffect, useState } from 'react';

import { Card } from './Card/Card';

let page = 1;

export const App = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://63bf12e0e348cb07622066df.mockapi.io/users?page=${page}&limit=2`
      );
      page += 1;
      setUsers([...users, ...data]);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(users);

  return (
    <>
      {users.map(user => {
        return <Card user={user} key={user.id}></Card>;
      })}
      <button type="button" onClick={fetchData}>
        load more
      </button>
    </>
  );
};
