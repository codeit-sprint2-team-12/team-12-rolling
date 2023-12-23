import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';

const StyledEmojiPickerStyle = styled.div`
  display: ${({ emojiPickerOpen }) => (emojiPickerOpen ? 'block' : 'none')};
  position: absolute;
  top: 4.3rem;
  right: 0;
  z-index: 1;
`;

export default function EmojiPick({ onClick, emojiPickerOpen }) {
  return (
    <StyledEmojiPickerStyle emojiPickerOpen={emojiPickerOpen}>
      <EmojiPicker onEmojiClick={onClick} lazyLoadEmojis />
    </StyledEmojiPickerStyle>
  );
}
