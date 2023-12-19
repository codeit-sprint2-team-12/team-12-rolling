import styled from 'styled-components';

import HeaderBottumRight from './HeaderBottumRight';

const ToRecipient = styled.h1`
  padding: 0;
  color: var(--gray-800, #2b2b2b);
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.028rem;
`;

export default function HeaderBottom({ children, profileImageURL = null }) {
  return (
    <>
      <ToRecipient>To. {children}</ToRecipient>
      <HeaderBottumRight></HeaderBottumRight>
    </>
  );
}
