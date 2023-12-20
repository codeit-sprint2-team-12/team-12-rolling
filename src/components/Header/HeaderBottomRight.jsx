import styled from 'styled-components';
import { useContext, useState } from 'react';
import OutlinedBtn from '../Button/OutlinedBtn';
import goShare from '../../assets/share-24.svg';
import ProfileImgList from './ProfieImgList';
import { DropdownUl, DropdownItems } from '../TextField/Dropdown';
import EmojiSelectBox from './EmojiSelectBox';
import RecipientContext from '../../contexts/RecipientContext';
import shareMessage from '../../apis/apiKakao';

const RightSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SplitLine = styled.div`
  width: 0.1rem;
  height: 2.8rem;
  background: var(--gray-200, #eee);
  margin: 0 1.3rem;
`;

const ShareList = styled(DropdownUl)`
  top: 4.5rem;
  right: -8rem;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 767px) {
    right: 0;
  }
`;

export default function HeaderBottomRight({
  nav,
  onShareURLClick,
  width,
  onShare,
}) {
  const [shareOpen, setShareOpen] = useState(false);

  const handleClickShareOpenList = () => {
    setShareOpen((prev) => !prev);
  };

  const recipientData = useContext(RecipientContext);
  const { recentMessages, messageCount } = recipientData;

  return (
    <RightSection>
      {width > 1247 && (
        <>
          <ProfileImgList
            nav={nav}
            recentMessages={recentMessages}
            messageCount={messageCount}
          ></ProfileImgList>
          <SplitLine />
        </>
      )}
      <EmojiSelectBox>{width > 1247 && '추가'}</EmojiSelectBox>
      <SplitLine />
      <OutlinedBtn size="sm" nav={nav} onClick={handleClickShareOpenList}>
        <img src={goShare} alt="공유하기" />
      </OutlinedBtn>
      {shareOpen ? (
        <ShareList nav={nav}>
          <DropdownItems onClick={shareMessage}>카카오톡 공유</DropdownItems>
          <DropdownItems onClick={onShareURLClick}>URL 공유</DropdownItems>
        </ShareList>
      ) : null}
    </RightSection>
  );
}

// 반응형 구현안
