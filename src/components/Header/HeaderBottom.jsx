import { children } from 'react';
import styled from 'styled-components';
import EmojiBadge from '../Badge/EmojiBadge';
import Outlined from '../Button/Outlined';
import goShare from '../../assets/share-24.svg';
import addFace from '../../assets/add-24.svg';

const ToRecipient = styled.h1`
  padding: 0;
  color: var(--gray-800, #2b2b2b);
  font-size: 2.8rem;
  font-style: normal;
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

export default function HeaderBottom({ children }) {
  return (
    <>
      <ToRecipient>{children}</ToRecipient>
      <EmojiSelectBox>
        <SplitLine />
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
        </HandleEmojiSelect>
        <Outlined size="sm">
          <img src={addFace} alt="추가하기" />
          추가
        </Outlined>
        <SplitLine />
        <Outlined size="sm">
          <img src={goShare} alt="공유하기" />
        </Outlined>
      </EmojiSelectBox>
    </>
  );
}
