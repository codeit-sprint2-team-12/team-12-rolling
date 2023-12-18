import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipientMessages, getRecipients } from '../../apis/apiRecipients';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import CardListForRollingPage from '../../components/Card/RollingPageCardList';
import EmojiPicker from 'emoji-picker-react';
import CardList from '../../components/CardList/CardList';

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
    const result = await getRecipients(params.createdId);

    setResponse(result);
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
      <Header>
        <HeaderBottom onClick={handleClickEmojiPickerOpenList}>
          {response.name}
        </HeaderBottom>
      </Header>

      <Main
        backgroundColor={response.backgroundColor}
        backgroundImageURL={response.backgroundImageURL}
      >
        {emojiPickerOpen ? <EmojiPicker /> : ''}
        <CardListForRollingPage items={items}></CardListForRollingPage>
      </Main>
    </>
  );
}
