import { Link } from 'react-router-dom';
import { TweetsList } from '../components/TweetsList/TweetsList';

export const Tweets = () => {
  return (
    <div>
      <TweetsList />
      <nav>
        <button>
          <Link to="/">back</Link>
        </button>
      </nav>
    </div>
  );
};
