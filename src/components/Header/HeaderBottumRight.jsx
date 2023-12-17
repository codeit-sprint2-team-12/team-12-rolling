import styled from 'styled-components';
import { children, useEffect, useState } from 'react';
import OutlinedBtn from '../Button/OutlinedBtn';
import EmojiBadge from '../Badge/EmojiBadge';
import goShare from '../../assets/share-24.svg';
import addFace from '../../assets/add-24.svg';
import upImg from '../../assets/arrow_top.png';
import downImg from '../../assets/arrow_down.png';
import ProfileImgList from './ProfieImgList';
import { DropdownUl, DropdownItems } from '../TextField/Dropdown';
import EmojiPick from '../../components/Header/EmojiInput';

const RightSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const EmojiSelectBox = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  ${children} {
    padding-right: 2.8rem;
    border-right: 0.1rem solid var(--gray-200, #eee);
  }
`;
const EmojiSelect = styled.ul`
  display: flex;
  gap: 0.8rem;
  margin: 0 1.4rem;
  border: none;
  list-style-type: none;
`;

const SplitLine = styled.div`
  width: 0.1rem;
  height: 2.8rem;
  background: var(--gray-200, #eee);
  margin: 0 1.3rem;

  @media screen and (max-width: 767px) {
    display: ${({ first }) => first && 'none'};
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

const ShareList = styled(DropdownUl)`
  width: 13.8rem;
  top: 4.5rem;
  right: -8rem;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 767px) {
    right: 0;
  }
`;

const AddEmojiText = styled.p`
  display: block;
  white-space: nowrap;
`;

export default function HeaderBottumRight({ onClick }) {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [emojiList, setEmojiList] = useState([{ emoji: '', count: 0 }]);

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

  const handleClickShareOpenList = (e) => {
    setShareOpen((prev) => !prev);
  };

  const handleClickEmojiList = (e) => {
    setEmojiOpen((prev) => !prev);
  };

  // useEffect(() => {
  //   handleEmojiClick();
  // }, [emojiList.emoji]);

  return (
    <RightSection>
      <ProfileImgList nav={true} />
      <SplitLine first={true} />
      <EmojiSelectBox>
        <EmojiSelect>
          {emojiList.emoji
            ? emojiList.map((emoji, index) => (
                <li key={index}>
                  <EmojiBadge emojiList={emoji}></EmojiBadge>
                </li>
              ))
            : ''
              // <AddEmojiText>이모티콘을 추가해 보세요!</AddEmojiText>
          }
        </EmojiSelect>
        <DropDownBtn onClick={handleClickEmojiList}>
          {emojiOpen ? (
            <>
              <DropDown src={upImg} />
              <AllEmojiList>
                {emojiList.emoji
                  ? emojiList.count === 0
                    ? ''
                    : emojiList.map((emoji, index) => (
                        <li key={index}>
                          <EmojiBadge emojiList={emoji}></EmojiBadge>
                        </li>
                      ))
                  : ''
                    // <AddEmojiText>이모티콘을 추가해 보세요!</AddEmojiText>
                }
              </AllEmojiList>
            </>
          ) : (
            <DropDown src={downImg} />
          )}
        </DropDownBtn>

        <AddBtn size="sm" onClick={handleClickEmojiPickerOpenList}>
          <img src={addFace} alt="추가하기" />
          추가
          {emojiPickerOpen ? <EmojiPick onClick={handleEmojiClick} /> : ''}
        </AddBtn>
        <SplitLine />
        <OutlinedBtn size="sm" nav={true} onClick={handleClickShareOpenList}>
          <img src={goShare} alt="공유하기" />
        </OutlinedBtn>
        {shareOpen ? (
          <ShareList>
            <DropdownItems>카카오톡 공유</DropdownItems>
            <DropdownItems>URL 공유</DropdownItems>
          </ShareList>
        ) : (
          ''
        )}
      </EmojiSelectBox>
    </RightSection>
  );
}

// 반응형 구현안
