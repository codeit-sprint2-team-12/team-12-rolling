import styled from 'styled-components';
import EmojiBadge from '../Badge/EmojiBadge';
import addFace from '../../assets/add-24.svg';
import upImg from '../../assets/arrow_top.png';
import downImg from '../../assets/arrow_down.png';
import EmojiPick from './EmojiInput';
import React, { useState, useEffect, useContext } from 'react';
import OutlinedBtn from '../Button/OutlinedBtn';
import EmojiBestList, { AddEmojiText } from '../Badge/EmojiList';
import {
  postRecipientReactions,
  getRecipientReactions,
} from '../../apis/apiRecipients';
import RecipientContext from '../../contexts/RecipientContext';

const EmojiSelectContainerStyle = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  & > * {
    padding-right: 2.8rem;
  }

  @media screen and (max-width: 1247px) {
    & > * {
      padding-right: 0.8rem;
    }
  }
`;

const AddBtnStyle = styled(OutlinedBtn)`
  position: relative;
  padding: 0.6rem 1.6rem;
  gap: 0.4rem;

  @media screen and (max-width: 1247px) {
    margin-left: 0.6rem;

    &:last-child {
      padding: 0;
    }
  }

  @media (max-width: 767px) {
    padding: 0.6rem 0.8rem;
    &:last-child {
      display: none;
    }
  }
`;

const DropDownStyle = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;

const DropDownBtnStyle = styled.button`
  position: relative;
  padding: 0.6rem;
  border: none;
  background-color: #fff;
`;

const AllEmojiListStyle = styled.ul`
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

export default function EmojiSelectBox({ children }) {
  const recipientData = useContext(RecipientContext);
  const [emojiList, setEmojiList] = useState([]);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [isReactionPostSuccess, setIsReactionPostSuccess] = useState(false);

  const handleLoad = async () => {
    try {
      const response = await getRecipientReactions(recipientData.id);
      const { results } = response;

      setEmojiList([...results]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, [isReactionPostSuccess]);

  const handleClickCount = async (e) => {
    try {
      setIsReactionPostSuccess(false);
      const { emoji } = e;

      const postData = {
        emoji,
        type: 'increase',
      };
      await postRecipientReactions(postData, recipientData.id);
    } catch (error) {
      return;
    } finally {
      setIsReactionPostSuccess(true);
    }
  };

  const handleClickEmojiPickerOpenList = () => {
    setEmojiPickerOpen((prev) => !prev);
  };

  const handleClickEmojiList = () => {
    setEmojiOpen((prev) => !prev);
  };

  return (
    <EmojiSelectContainerStyle>
      <EmojiBestList emojiList={emojiList}></EmojiBestList>
      <DropDownBtnStyle onClick={handleClickEmojiList}>
        {emojiOpen ? (
          <>
            <DropDownStyle src={upImg} />
            <AllEmojiListStyle>
              {emojiList.length !== 0 ? (
                emojiList.slice(0, 8).map((emoji, index) => (
                  <li key={index}>
                    <EmojiBadge emojiList={emoji}></EmojiBadge>
                  </li>
                ))
              ) : (
                <AddEmojiText>이모티콘을 추가해 보세요! 😃</AddEmojiText>
              )}
            </AllEmojiListStyle>
          </>
        ) : (
          <DropDownStyle src={downImg} />
        )}
      </DropDownBtnStyle>

      <AddBtnStyle size="sm" onClick={handleClickEmojiPickerOpenList}>
        <img src={addFace} alt="추가하기" />
        {children}
      </AddBtnStyle>
      <EmojiPick onClick={handleClickCount} emojiPickerOpen={emojiPickerOpen} />
    </EmojiSelectContainerStyle>
  );
}
