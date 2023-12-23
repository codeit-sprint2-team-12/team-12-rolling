import styled from 'styled-components';
import { useContext, useState } from 'react';
import OutlinedBtn from '../Button/OutlinedBtn';
import goShare from '../../assets/share-24.svg';
import ProfileImgList from './ProfieImgList';
import { DropdownUlStyle, DropdownItems } from '../TextField/Dropdown';
import EmojiSelectBox from './EmojiSelectBox';
import RecipientContext from '../../contexts/RecipientContext';

const RightSectionStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SplitLineStyle = styled.div`
  width: 0.1rem;
  height: 2.8rem;
  background: var(--gray-200, #eee);
  margin: 0 1.3rem;
`;

const ShareListStyle = styled(DropdownUlStyle)`
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
    <RightSectionStyle>
      {width > 1247 && (
        <>
          <ProfileImgList
            nav={nav}
            recentMessages={recentMessages}
            messageCount={messageCount}></ProfileImgList>
          <SplitLineStyle />
        </>
      )}
      <EmojiSelectBox>{width > 767 && '추가'}</EmojiSelectBox>
      <SplitLineStyle />
      <OutlinedBtn size="sm" nav={nav} onClick={handleClickShareOpenList}>
        <img src={goShare} alt="공유하기" />
      </OutlinedBtn>
      {shareOpen ? (
        <ShareListStyle nav={nav}>
          <DropdownItems onClick={onShare}>카카오톡 공유</DropdownItems>
          <DropdownItems onClick={onShareURLClick}>URL 공유</DropdownItems>
        </ShareListStyle>
      ) : null}
    </RightSectionStyle>
  );
}

// 반응형 구현안
