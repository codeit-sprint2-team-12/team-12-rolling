import styled from 'styled-components';
import HeaderBottomRight from './HeaderBottomRight';

export const ToRecipientStyle = styled.h1`
  padding: 0;
  color: var(--gray-800, #2b2b2b);
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.028rem;
`;

export default function HeaderBottom({
  width,
  onShare,
  onShareURLClick,
  children,
  profileImageURL = null,
}) {
  return (
    <>
      {width > 767 && <ToRecipientStyle>To. {children}</ToRecipientStyle>}
      <HeaderBottomRight
        width={width}
        onShareURLClick={onShareURLClick}
        onShare={onShare}
        nav={true}></HeaderBottomRight>
    </>
  );
}
