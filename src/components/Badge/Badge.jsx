import styled from 'styled-components';

const STYLE = {
  지인: {
    color: 'var(--orange-500, #FF8832)',
    background: 'var(--orange-100, #FFF0D6)',
  },
  동료: {
    color: 'var(--purple-600, #9935FF)',
    background: 'var(--purple-100, #F8F0FF)',
  },
  가족: {
    color: 'var(--green-500, #2BA600)',
    background: 'var(--green-100, #E4FBDC)',
  },
  친구: {
    color: 'var(--blue-500, #00A2FE)',
    background: 'var(--blue-100, #E2F5FF)',
  },
};

const BadgeContainerStyle = styled.span`
  display: inline-flex;
  padding: 0rem 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.007rem;
  border-radius: 0.4rem;

  color: ${({ $relationship }) =>
    $relationship ? STYLE[$relationship].color : 'transparent'};

  background: ${({ $relationship }) =>
    $relationship ? STYLE[$relationship].background : 'transparent'};
`;

function Badge({ className, relationship = '지인' }) {
  return (
    <BadgeContainerStyle className={className} $relationship={relationship}>
      {relationship}
    </BadgeContainerStyle>
  );
}

export default Badge;
