import { Button } from 'components/Button/Button';
import { CardMain } from './Card.styled';
import { ButtonCard } from 'components/Button/Button.styled';
import { Boy } from 'components/Boy/Boy';

export const Card = () => {
  return (
    <CardMain>
      <ButtonCard>Following</ButtonCard>
      <Boy></Boy>
    </CardMain>
  );
};
