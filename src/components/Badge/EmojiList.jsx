import styled from 'styled-components';
import EmojiBadge from '../Badge/EmojiBadge';
import { useEffect, useState } from 'react';

const EmojiBest = styled.ul`
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
  const [orderEmoji, setOrderEmoji] = useState('count');
  const [emojiBestList, setEmojiBestList] = useState(emojiList);

  useEffect(() => {
    setEmojiBestList(emojiList);
  }, [emojiList]);

  emojiBestList.sort((a, b) => b[orderEmoji] - a[orderEmoji]);

  return (
    <EmojiBest>
      {emojiBestList.length !== 0 ? (
        emojiBestList.slice(0, 3).map((emoji, index) => (
          <li key={index}>
            <EmojiBadge emojiList={emoji}></EmojiBadge>
          </li>
        ))
      ) : (
        <AddEmojiText>이모티콘을 추가해 보세요! 😃</AddEmojiText>
      )}
    </EmojiBest>
  );
}
