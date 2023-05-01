import { Card } from '../Card/Card';

export const TweetsList = ({ users, nextPage, loadMore }) => {
  return (
    <div className="box">
      {users.map(user => {
        return <Card user={user} key={user.id}></Card>;
      })}
      {loadMore && (
        <button type="button" onClick={nextPage}>
          load more
        </button>
      )}
    </div>
  );
};
