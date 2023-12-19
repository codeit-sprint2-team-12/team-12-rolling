import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import { useEffect, useState } from 'react';
import { getRecipientMessages } from '../../apis/apiRecipients';
import RollingPageCardList from '../../components/Card/RollingPageCardList';
import Toast from '../../components/Toast/Toast';
import { useLocation } from 'react-router-dom';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const Main = styled.main`
  background-color: var(--Orange-200, #ffe2ad);
  position: relative;
  padding: 11.3rem 0;
  height: 100vh;
  overflow: scroll;

  @media screen and (max-width: 1247px) {
    padding: 9.3rem 2.4rem;
  }

  @media screen and (max-width: 767px) {
    padding: 2.4rem 2.4rem;
  }
`;

const AlignButton = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  align-items: center;
`;

const DeleteButton = styled(PrimaryBtn)`
  margin-bottom: 1.1rem;
  width: 9.2rem;
  text-align: start;
  white-space: nowrap;
  display: block;

  justify-content: center;
`;

const StyledToast = styled(Toast)`
  position: fixed;
`;

export default function UsersRollingPage({ name = 'recipient' }) {
  const location = useLocation();

  const [goDeletePage, setGoDeletePage] = useState(false);
  const [items, setItems] = useState();
  const [copyURL, setCopyURL] = useState(false);

  const isDelete = () => {
    setGoDeletePage((prev) => !prev);
  };

  const handleLoad = async () => {
    const { results } = await getRecipientMessages();
    return setItems(results);
  };

  const handleSumbitAdressShare = async () => {
    try {
      await navigator.clipboard.writeText(location.pathname);
      setCopyURL(true);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setCopyURL(false), 5000);
    }
  };

  // location.pathname앞에 baseUrl 필요

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
        <AlignButton>
          <DeleteButton onClick={isDelete} size="small">
            {goDeletePage ? '취소하기' : '삭제하기'}
          </DeleteButton>
        </AlignButton>
        <RollingPageCardList
          goDeletePage={goDeletePage}
          items={items}
        ></RollingPageCardList>

        {copyURL && <StyledToast />}
      </Main>
    </>
  );
}

//드롭다운 버튼으로 감싸기?
