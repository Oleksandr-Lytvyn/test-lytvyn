import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TweetsList } from '../components/TweetsList/TweetsList';
import { Filter } from 'components/Filter/Filter';
import { async } from 'q';

let page = 1;

export const Tweets = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://63bf12e0e348cb07622066df.mockapi.io/users?page=${page}&limit=3`
      );
      page += 1;
      setUsers(data);
    } catch (error) {
      return error;
    }
  };

  const fetchFollowing = async () => {
    try {
      const { data } = await axios.get(
        `https://63bf12e0e348cb07622066df.mockapi.io/users`
      );
      const result = data.filter(
        user => localStorage.getItem(user.id) === 'true'
      );
      console.log(result);
      setUsers(result);
    } catch (error) {
      return error;
    }
  };

  const fetchFollow = async () => {
    try {
      const { data } = await axios.get(
        `https://63bf12e0e348cb07622066df.mockapi.io/users`
      );
      const result = data.filter(
        user => localStorage.getItem(user.id) !== 'true'
      );
      console.log(result);
      setUsers(result);
    } catch (error) {
      return error;
    }
  };

  const nextPage = async () => {
    try {
      const { data } = await axios.get(
        `https://63bf12e0e348cb07622066df.mockapi.io/users?page=${page}&limit=3`
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
  return (
    <div className="box">
      <Filter following={fetchFollowing} follow={fetchFollow} />
      <TweetsList users={users} nextPage={nextPage} />
      <nav>
        <button>
          <Link to="/">back</Link>
        </button>
      </nav>
    </div>
  );
};
