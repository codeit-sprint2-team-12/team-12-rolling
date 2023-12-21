import React from 'react';
import Header from '../../components/Header/Header';
import HeaderTop from '../../components/Header/HeaderTop';
import LandingMain from './LandingMain';

export default function Landing() {
  return (
    <>
      <Header>
        <HeaderTop isBtn={true} />
      </Header>
      <LandingMain />
    </>
  );
}
