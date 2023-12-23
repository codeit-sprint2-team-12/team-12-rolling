import styled from 'styled-components';
import EmojiBadge from '../Badge/EmojiBadge';
import greenBackground from '../../assets/cardListGreen.png';
import blueBackground from '../../assets/cardListblue.png';
import orangeBackground from '../../assets/cardListOrange.png';
import purpleBackground from '../../assets/cardListPurple.png';
import ProfileImgList from '../Header/ProfieImgList';
import { useNavigate } from 'react-router-dom';

const COLOR = {
  green: greenBackground,
  blue: blueBackground,
  beige: orangeBackground,
  purple: purpleBackground,
};

const CardListBoxStyle = styled.ul`
  list-style-type: none;
  overflow: hidden;
  color: var(--gray-900, #181818);
  &:hover {
    animation: bounce;
    animation-duration: 1s;
  }
`;

const TextBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  min-height: 11.5rem;
`;

const ToRecipientStyle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.024rem;
`;

const CardStyle = styled.li`
  margin-right: 2rem;
  padding: 3rem 2.4rem;
  position: relative;
  width: 27.4rem;
  height: 26rem;
  cursor: pointer;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background: ${({ $background }) =>
    $background ? `url(${$background})` : `url(${COLOR['beige']})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const EmojiBoxStyle = styled.ul`
  list-style-type: none;
  margin-top: 4.3rem;
  padding-top: 1.6rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.12);

  > li {
    display: inline-block;
    margin-left: 0.8rem;
  }
`;

export default function CardList({ cardData }) {
  const navigate = useNavigate();
  const {
    id,
    backgroundColor,
    backgroundImageURL,
    recentMessages,
    name,
    messageCount,
    topReactions,
  } = cardData;

  const background = backgroundImageURL
    ? backgroundImageURL
    : COLOR[backgroundColor];

  const handlePostClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <CardListBoxStyle>
      <CardStyle $background={background} onClick={handlePostClick}>
        <TextBoxStyle>
          <ToRecipientStyle>To.{name}</ToRecipientStyle>

          <ProfileImgList
            recentMessages={recentMessages}
            messageCount={messageCount}
          />
        </TextBoxStyle>

        <EmojiBoxStyle>
          {topReactions.map((item) => {
            return (
              <li>
                <EmojiBadge
                  emojiList={{ emoji: item.emoji, count: item.count }}
                />
              </li>
            );
          })}
        </EmojiBoxStyle>
      </CardStyle>
    </CardListBoxStyle>
  );
}
