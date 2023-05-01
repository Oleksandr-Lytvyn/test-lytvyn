import { Link } from 'react-router-dom';
import { TweetsList } from '../components/TweetsList/TweetsList';

export const Home = () => {
  return (
    <div>
      <h2>homepage</h2>
      <nav>
        <button>
          <Link to="/tweets">tweets</Link>
        </button>
      </nav>
    </div>
  );
};
