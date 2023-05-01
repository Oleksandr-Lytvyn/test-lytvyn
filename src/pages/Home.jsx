import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="box">
      <h2>homepage</h2>
      <nav>
        <button>
          <Link to="/tweets">tweets</Link>
        </button>
      </nav>
    </div>
  );
};
