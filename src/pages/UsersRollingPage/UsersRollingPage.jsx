import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import { useEffect, useState } from 'react';
import { getRecipientMessages } from '../../apis/apiRecipients';
import RollingPageCardList from '../../components/Card/RollingPageCardList';
import Toast from '../../components/Toast/Toast';

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

const StyledToast = styled(Toast)`
  position: absolute;

  left: 50%;
  transform: translate(0, -50%);
`;

export default function UsersRollingPage({ name = 'recipient' }) {
  const [deletePage, setDeletePage] = useState(true);
  const [items, setItems] = useState();
  const [copyURL, setCopyURL] = useState(false);

  const isDelete = () => {
    setDeletePage((prev) => !prev);
  };

  const handleLoad = async () => {
    const { results } = await getRecipientMessages();
    return setItems(results);
  };

  const handleSumbitAdressShare = () => {
    setCopyURL((prev) => !prev);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header>
        <HeaderTop />
      </Header>
      <Header>
        <HeaderBottom onShareURLClick={handleSumbitAdressShare}>
          {name}
        </HeaderBottom>
      </Header>

      <Main>
        <RollingPageCardList items={items}></RollingPageCardList>

        {copyURL && <StyledToast />}
      </Main>
    </>
  );
}

//드롭다운 버튼으로 감싸기?
