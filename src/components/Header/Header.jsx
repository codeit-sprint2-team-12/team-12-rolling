import styled from 'styled-components';

const NavStyle = styled.nav`
  width: 100%;
  border-bottom: 1px solid #ededed;
  align-items: center;

  @media screen and (min-width: 375px) {
    padding: 1.1rem 2rem;
  }
  @media screen and (min-width: 1248px) {
    padding: 1.1rem 2.4rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
  }
`;

export default function Header({ children, onClick }) {
  return (
    <NavStyle onClick={onClick}>
      <div>{children}</div>
    </NavStyle>
  );
}
