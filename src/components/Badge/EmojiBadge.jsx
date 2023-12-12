import styled from 'styled-components';

const BadgeContainer = styled.span`
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

function EmojiBadge({ className, emoji = '😍', likes = 0 }) {
  return (
    <BadgeContainer className={className}>
      <div>{emoji}</div>
      <div>{likes}</div>
    </BadgeContainer>
  );
}

export default EmojiBadge;
