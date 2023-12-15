import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import Card from '../../components/Card/Card';
import { useState } from 'react';

const Main = styled.main`
  background-color: var(--Orange-200, #ffe2ad);
  padding: 12.7rem 18.75vw 24.6rem;
  height: 100vh;

  @media screen and (max-width: 1247px) {
    padding: 9.3rem 2.4rem;
  }

  @media screen and (max-width: 767px) {
    padding: 2.4rem 2.4rem;
  }
`;

export default function MainPage({ name = 'recipient' }) {
  const [deletePage, setDeletePage] = useState(true);
  const [add, setAdd] = useState(true);

  const isDelete = () => {
    setDeletePage((prev) => !prev);
  };

  return (
    <>
      <Header>
        <HeaderTop />
      </Header>
      <Header>
        <HeaderBottom>{name}</HeaderBottom>
      </Header>

      <Main>
        <Card add={add}></Card>
      </Main>
    </>
  );
}
