import styled from 'styled-components';
import EmojiBadge from '../Badge/EmojiBadge';
import { useEffect, useState } from 'react';

const EmojiBestStyle = styled.ul`
  min-width: 15rem;
  display: flex;
  gap: 0.8rem;
  margin: 0 1.4rem;
  border: none;
  list-style-type: none;

  @media screen and (max-width: 1247px) {
    margin: 0;
  }
`;
export const AddEmojiText = styled.p`
  display: block;
  white-space: nowrap;
  font-size: 1.4rem;
`;

export default function EmojiBestList({ emojiList }) {
  const [emojiBestList, setEmojiBestList] = useState(emojiList);

  useEffect(() => {
    setEmojiBestList(emojiList);
  }, [emojiList]);

  emojiBestList.sort((a, b) => b['count'] - a['count']);

  return (
    <EmojiBestStyle>
      {emojiBestList.length !== 0 ? (
        emojiBestList.slice(0, 3).map((emoji, index) => (
          <li key={index}>
            <EmojiBadge emojiList={emoji}></EmojiBadge>
          </li>
        ))
      ) : (
        <AddEmojiText>이모티콘을 추가해 보세요! 😃</AddEmojiText>
      )}
    </EmojiBestStyle>
  );
}
