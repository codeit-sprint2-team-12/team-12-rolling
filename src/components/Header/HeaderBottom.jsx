import { children, useState } from 'react';
import styled from 'styled-components';
import EmojiBadge from '../Badge/EmojiBadge';
import OutlinedBtn from '../Button/OutlinedBtn';
import goShare from '../../assets/share-24.svg';
import addFace from '../../assets/add-24.svg';
import upImg from '../../assets/arrow_top.png';
import downImg from '../../assets/arrow_down.png';
import DropdownBox from '../TextField/Dropdown';

const ToRecipient = styled.h1`
  padding: 0;
  color: var(--gray-800, #2b2b2b);
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.028rem;
`;

const EmojiSelectBox = styled.div`
  display: flex;
  align-items: center;
  ${children} {
    padding-right: 2.8rem;
    border-right: 0.1rem solid var(--gray-200, #eee);
  }
`;
const HandleEmojiSelect = styled.ul`
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
`;

const DropDown = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;

const DropDownBtn = styled.button`
  padding: 0.6rem;
  border: none;
  background-color: #fff;

  cursor: pointer;
`;

const ShareBtn = styled(DropdownBox)`
  padding: 0.6rem 1.6rem;
`;

export default function HeaderBottom({ children, profileImageURL = null }) {
  const [open, setOpen] = useState(false);
  const [notNav, setNotNav] = useState(false);

  //위의 한 줄은 페이지 단위로 state 부여해야함

  const handleClickEmojiList = (e) => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ToRecipient>To. {children}</ToRecipient>

      <SplitLine />
      <EmojiSelectBox>
        <HandleEmojiSelect>
          <li>
            <EmojiBadge></EmojiBadge>
          </li>
          <li>
            <EmojiBadge></EmojiBadge>
          </li>
          <li>
            <EmojiBadge></EmojiBadge>
          </li>
          <DropDownBtn onClick={handleClickEmojiList}>
            <DropDown src={open ? downImg : upImg} />
          </DropDownBtn>
        </HandleEmojiSelect>
        <OutlinedBtn size="sm">
          <img src={addFace} alt="추가하기" />
          추가
        </OutlinedBtn>
        <SplitLine />
        <Outlined size="sm">
          <img src={goShare} alt="공유하기" />
        </Outlined>
      </EmojiSelectBox>
    </>
  );
}
