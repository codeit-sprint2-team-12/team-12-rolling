import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getRecipientMessages, getRecipients } from '../../apis/apiRecipients';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import CardListForRollingPage from '../../components/Card/RollingPageCardList';
import EmojiPicker from 'emoji-picker-react';
import CardList from '../../components/CardList/CardList';
import IdContext from '../../contexts/IdContext';
import RecipientContext from '../../contexts/RecipientContext';

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

export default function UsersRollingPage({ name = 'recipient' }) {
  const params = useParams();
  const [deletePage, setDeletePage] = useState(true);
  const [add, setAdd] = useState(true);
  const [items, setItems] = useState();
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [response, setResponse] = useState({});
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);

  const handleClickEmojiPickerOpenList = (e) => {
    setEmojiPickerOpen((prev) => !prev);
  };

  const isDelete = () => {
    setDeletePage((prev) => !prev);
  };

  const handleLoad = async () => {
    const { results } = await getRecipientMessages(params.createdId);

    setItems(results);
  };

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
              <HeaderBottom onClick={handleClickEmojiPickerOpenList}>
                {response.name}
              </HeaderBottom>
            ) : null}
            {emojiPickerOpen ? <EmojiPicker /> : ''}
          </Header>
        </IdContext.Provider>
      </RecipientContext.Provider>

      <Main
        backgroundColor={response.backgroundColor}
        backgroundImageURL={response.backgroundImageURL}>
        <CardListForRollingPage items={items}></CardListForRollingPage>
      </Main>
    </>
  );
}
