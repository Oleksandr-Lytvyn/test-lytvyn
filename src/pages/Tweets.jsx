import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TweetsList } from '../components/TweetsList/TweetsList';
import { Filter } from 'components/Filter/Filter';

let page = 1;

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://63bf12e0e348cb07622066df.mockapi.io/users?page=${page}&limit=3`
      );
      page += 1;
      setUsers(data);
      setLoadMore(true);
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
      setUsers(result);
      setLoadMore(false);
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
      setUsers(result);
      setLoadMore(false);
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
      <Filter following={fetchFollowing} follow={fetchFollow} all={fetchData} />
      <TweetsList users={users} nextPage={nextPage} loadMore={loadMore} />
      <nav>
        <button>
          <Link to="/">back</Link>
        </button>
      </nav>
    </div>
  );
};
