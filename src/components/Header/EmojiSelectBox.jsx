import styled from 'styled-components';
import EmojiBadge from '../Badge/EmojiBadge';
import addFace from '../../assets/add-24.svg';
import upImg from '../../assets/arrow_top.png';
import downImg from '../../assets/arrow_down.png';
import EmojiPick from './EmojiInput';
import { children, useState } from 'react';
import OutlinedBtn from '../Button/OutlinedBtn';
import EmojiBestList, { AddEmojiText } from '../Badge/EmojiList';

const EmojiSelectContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  ${children} {
    padding-right: 2.8rem;
    border-right: 0.1rem solid var(--gray-200, #eee);
  }
`;

const AddBtn = styled(OutlinedBtn)`
  gap: 0.4rem;
  position: relative;

  @media (max-width: 767px) {
    &:last-child {
      display: none;
    }
  }
`;

const DropDown = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;

const DropDownBtn = styled.button`
  position: relative;
  padding: 0.6rem;
  border: none;
  background-color: #fff;

  cursor: pointer;
`;

const AllEmojiList = styled.ul`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style-type: none;

  right: 0;
  top: 4.5rem;
  padding: 2.4rem;

  gap: 1rem;

  border-radius: 0.8rem;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  z-index: 1;
`;

export default function EmojiSelectBox() {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [emojiList, setEmojiList] = useState([]);

  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const handleEmojiClick = (emojiData, click) => {
    const realEmoji = emojiData.emoji;
    const existingEmoji = emojiList.find((item) => item.emoji === realEmoji);

    if (existingEmoji) {
      setEmojiList((prev) =>
        prev.map((emojis) =>
          emojis.emoji === realEmoji
            ? { ...emojis, count: emojis.count + 1 }
            : emojis
        )
      );
    } else {
      setEmojiList((prev) => [...prev, { emoji: realEmoji, count: 1 }]);
    }
  };

  const handleClickEmojiPickerOpenList = (e) => {
    setEmojiPickerOpen((prev) => !prev);
  };

  const handleClickEmojiList = () => {
    setEmojiOpen((prev) => !prev);
  };

  return (
    <EmojiSelectContainer>
      <EmojiBestList emojiList={emojiList}></EmojiBestList>
      <DropDownBtn onClick={handleClickEmojiList}>
        {emojiOpen ? (
          <>
            <DropDown src={upImg} />
            <AllEmojiList>
              {emojiList.length !== 0 ? (
                emojiList.slice(0, 8).map((emoji, index) => (
                  <li key={index}>
                    <EmojiBadge emojiList={emoji}></EmojiBadge>
                  </li>
                ))
              ) : (
                <AddEmojiText>이모티콘을 추가해 보세요! 😃</AddEmojiText>
              )}
            </AllEmojiList>
          </>
        ) : (
          <DropDown src={downImg} />
        )}
      </DropDownBtn>

      <AddBtn size="sm" onClick={handleClickEmojiPickerOpenList}>
        <img src={addFace} alt="추가하기" />
        추가
      </AddBtn>
      <EmojiPick onClick={handleEmojiClick} emojiPickerOpen={emojiPickerOpen} />
    </EmojiSelectContainer>
  );
}
