import styled from 'styled-components';
import {
  postRecipientReactions,
  getRecipientReactions,
} from '../../apis/apiRecipients';

import { useEffect } from 'react';

const BadgeContainer = styled.button`
  border: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;

  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);

  color: #fff;
  font-size: 1.6rem;
  line-height: 2rem; /* 125% */
`;

function EmojiBadge({
  className,
  onClick,
  emojiList = { emoji: '', count: 0 },
}) {
  const { emoji, count } = emojiList;

  return (
    <BadgeContainer className={className} onClick={onClick}>
      <div>{emoji}</div>
      <div>{count}</div>
    </BadgeContainer>
  );
}

export default EmojiBadge;
