import styled from 'styled-components';

const TitleStyle = styled.label`
  color: var(--gray-900, #181818);
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`;

export default function Title({ children = '' }) {
  return <TitleStyle>{children}</TitleStyle>;
}
