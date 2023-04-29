import { InfoBoard } from './Info.styled';

export const Info = ({ tweets, followers }) => {
  return (
    <InfoBoard>
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>
    </InfoBoard>
  );
};
