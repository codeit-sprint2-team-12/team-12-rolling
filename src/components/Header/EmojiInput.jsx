import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';

const StyledEmojiPicker = styled.div`
  position: absolute;
  top: 4.3rem;
  right: 0;
  z-index: 1;
`;

export default function EmojiPick({ onClick }) {
  return (
    <StyledEmojiPicker>
      <EmojiPicker onEmojiClick={onClick} />
    </StyledEmojiPicker>
  );
}
