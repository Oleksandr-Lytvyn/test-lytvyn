import { Route, Routes } from 'react-router';
import { Home } from 'pages/Home';
import { Tweets } from 'pages/Tweets';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
