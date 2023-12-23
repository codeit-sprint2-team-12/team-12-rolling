import styled from 'styled-components';

const BadgeContainerStyle = styled.button`
  border: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;

  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);

  color: #fff;
  font-size: 1.6rem;
  line-height: 2rem;
`;

function EmojiBadge({
  className,
  onClick,
  emojiList = { emoji: '', count: 0 },
}) {
  const { emoji, count } = emojiList;

  return (
    <BadgeContainerStyle className={className} onClick={onClick}>
      <div>{emoji}</div>
      <div>{count}</div>
    </BadgeContainerStyle>
  );
}

export default EmojiBadge;
