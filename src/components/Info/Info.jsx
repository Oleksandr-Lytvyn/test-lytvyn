import { InfoBoard } from './Info.styled';

export const Info = ({ tweets, followers }) => {
  const numberBegore = followers.toString().slice(0, 3);
  const numberAfter = followers.toString().slice(3, followers.length);
  const followersDot = `${numberBegore}.${numberAfter}`;
  return (
    <InfoBoard>
      <p>{tweets} tweets</p>
      <p>{followersDot} followers</p>
    </InfoBoard>
  );
};
