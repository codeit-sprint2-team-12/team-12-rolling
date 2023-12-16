import React from 'react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 2.4rem 2.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 30%;

  @media screen and (max-width: 1248px) {
    width: 100%;
    height: 10.4rem;
    padding: 2.4rem 2.4rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
function handleListClick() {
  window.location.href = '/post';
}
export default function ListMain() {
  return (
    <main>
      <Footer>
        <PrimaryBtn size="regular" onClick={handleListClick}>
          나도 만들어보기
        </PrimaryBtn>
      </Footer>
    </main>
  );
}
