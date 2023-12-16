import styled from 'styled-components';

const TitleStyle = styled.label`
  color: var(--gray-900, #181818);
  /* Font/24 Bold */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
`;

export default function Title({ children = '' }) {
  return <TitleStyle>{children}</TitleStyle>;
}
