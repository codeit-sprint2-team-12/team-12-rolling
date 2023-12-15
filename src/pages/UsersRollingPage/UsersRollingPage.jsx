import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import Card, { CardBox } from '../../components/Card/Card';
import { children, useState } from 'react';

const Main = styled.main`
  background-color: var(--Orange-200, #ffe2ad);
  padding: 12.7rem 0 24.6rem;
  height: 100vh;
  overflow: scroll;

  @media screen and (max-width: 1247px) {
    padding: 9.3rem 2.4rem;
  }

  @media screen and (max-width: 767px) {
    padding: 2.4rem 2.4rem;
  }
`;

const CardList = styled.article`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;

  @media screen and (max-width: 1247px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);

    ${children} {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 767px) {
  }
`;

export default function UsersRollingPage({ name = 'recipient' }) {
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
        <CardList>
          <Card add={add}></Card>

          <CardBox></CardBox>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          {}
        </CardList>
      </Main>
    </>
  );
}
