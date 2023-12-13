import styled from 'styled-components';
import EmojiBadge from '../Badge/EmojiBadge';
import greenBackground from '../../assets/cardListGreen.png';
import blueBackground from '../../assets/cardListblue.png';
import orangeBackground from '../../assets/cardListOrange.png';
import purpleBackground from '../../assets/cardListPurple.png';

const COLOR = {
  green: `url(${greenBackground})`,
  blue: `url(${blueBackground})`,
  orange: `url(${orangeBackground})`,
  purple: `url(${purpleBackground})`,
};

/* Font/24 Bold */

const CardListBox = styled.ul`
  list-style-type: none;
  overflow: hidden;
  color: var(--gray-900, #181818);
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const ToRecipient = styled.h1`
  font-size: 2.4rem;

  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.024rem;
`;
/* Font/16 Regular */
const CountWritePeople = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;

  > span {
    font-weight: 700;
  }
`;

const Card = styled.li`
  padding: 3rem 2.4rem;
  position: relative;
  width: 27.4rem;
  height: 26rem;

  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background: ${({ backgroundcolor }) => COLOR[backgroundcolor]};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const EmojiBox = styled.ul`
  list-style-type: none;
  margin-top: 4.3rem;
  padding-top: 1.6rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.12);

  > li {
    display: inline-block;
    margin-left: 0.8rem;
  }
`;

export default function CardList({
  backgroundcolor = 'orange',
  name = 'ddd',
  count = '21',
}) {
  return (
    <CardListBox>
      <Card backgroundcolor={backgroundcolor}>
        <TextBox>
          <ToRecipient>To.{name}</ToRecipient>
          <div>프로필 이미지 나열</div>
          <CountWritePeople>
            <span>{count}</span>명이 작성했어요!
          </CountWritePeople>
        </TextBox>
        <EmojiBox>
          <li>
            <EmojiBadge></EmojiBadge>
          </li>
          <li>
            <EmojiBadge></EmojiBadge>
          </li>
          <li>
            <EmojiBadge></EmojiBadge>
          </li>
        </EmojiBox>
      </Card>
    </CardListBox>
  );
}
