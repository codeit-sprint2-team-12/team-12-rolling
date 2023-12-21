import React from 'react';
import Header from '../../components/Header/Header';
import HeaderTop from '../../components/Header/HeaderTop';
import ListMain from './ListMain';

export default function List() {
  return (
    <>
      <Header>
        <HeaderTop />
      </Header>
      <ListMain />
    </>
  );
}
