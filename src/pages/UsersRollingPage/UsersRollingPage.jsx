import { useParams, useLocation, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getRecipientMessages, getRecipients } from '../../apis/apiRecipients';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import Toast from '../../components/Toast/Toast';
import RollingPageCardList from '../../components/Card/RollingPageCardList';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const COLOR = {
  beige: 'var(--orange-200, #FFE2AD)',
  blue: 'var(--blue-200, #B1E4FF)',
  green: 'var(--green-200, #d0f5c3)',
  purple: 'var(--purple-200, #ECD9FF)',
};

const Main = styled.main`
  ${({ backgroundColor, backgroundImageURL }) => {
    if (backgroundImageURL) {
      return `
        background-image: url(${backgroundImageURL});
        background-size: cover;
        background-position: center;
      `;
    } else if (backgroundColor) {
      return `
        background-color: ${COLOR[backgroundColor]};
      `;
    } else {
      return `
        background-color: var(--Orange-200, #ffe2ad);
      `;
    }
  }};

  padding: 6.3rem 0;
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
  margin: 0 auto 1.1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  align-items: center;
`;

const DeleteButton = styled(PrimaryBtn)`
  width: auto;
  text-align: start;
  white-space: nowrap;
  display: block;

  justify-content: center;
`;

const StyledToast = styled(Toast)`
  position: fixed;
`;

export default function UsersRollingPage({ deletePage = false }) {
  const location = useLocation();
  const params = useParams();
  const [copyURL, setCopyURL] = useState(false);
  const [items, setItems] = useState();
  const [response, setResponse] = useState({});
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);

  const handleLoad = async () => {
    const { results } = await getRecipientMessages(params.createdId);

    setItems(results);
  };

  const handleSumbitAdressShare = async () => {
    if (deletePage) {
      return alert('편집 페이지는 공유할 수 없습니다');
    }

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

  const handleGetInfo = async () => {
    try {
      const result = await getRecipients(params.createdId);

      setResponse((prev) => ({ ...prev, ...result }));
    } catch (error) {
      return;
    } finally {
      setIsLoadingSuccess(true);
    }
  };

  useEffect(() => {
    handleLoad();
    handleGetInfo();
  }, []);

  return (
    <>
      <Header>
        <HeaderTop />
      </Header>
      <RecipientContext.Provider value={response}>
        <IdContext.Provider value={params.createdId}>
          <Header>
            {isLoadingSuccess ? (
              <HeaderBottom onShareURLClick={handleSumbitAdressShare}>
                {response.name}
              </HeaderBottom>
            ) : null}
            {emojiPickerOpen ? <EmojiPicker /> : ''}
          </Header>
        </IdContext.Provider>
      </RecipientContext.Provider>

      <Main
        backgroundColor={response.backgroundColor}
        backgroundImageURL={response.backgroundImageURL}
      >
        <AlignButton>
          {deletePage && (
            <DeleteButton size="small">페이지 삭제하기</DeleteButton>
          )}
          <Link
            to={deletePage ? `/post/${params.createdId}` : 'edit'}
            style={{ textDecoration: 'none' }}
          >
            <DeleteButton size="small">
              {deletePage ? '취소하기' : '삭제하기'}
            </DeleteButton>
          </Link>
        </AlignButton>
        <RollingPageCardList
          items={items}
          deletePage={deletePage}
        ></RollingPageCardList>

        {copyURL && <StyledToast></StyledToast>}
      </Main>
    </>
  );
}
