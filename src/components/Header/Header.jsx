import styled from 'styled-components';
import HeaderTop from './HeaderTop';

const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid #ededed;
  align-items: center;
  

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 1.1rem auto;
  }

  
  @media screen and (max-width: 1247px) {
    > div {
      padding: 0 2.4rem;

    }
  }
    @media screen and (max-width: 767px) {
      > div {
        padding:0 2.4rem;
      }
    }
  @media screen and (max-width: 374px) {
    > div {
      padding: 0 2rem;
    }
  }
`;

export default function Header({ children }) {
  return (
    <Nav>
      <div><HeaderTop/>
      </div>
    </Nav>
  );
}
