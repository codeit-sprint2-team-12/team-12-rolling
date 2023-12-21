import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  getRecipientMessages,
  getRecipients,
  deleteMessages,
  deleteRecipient,
} from '../../apis/apiRecipients';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HeaderBottom, {
  ToRecipient,
} from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import Toast from '../../components/Toast/Toast';
import RollingPageCardList from '../../components/Card/RollingPageCardList';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import EmojiPicker from 'emoji-picker-react';
import IdContext from '../../contexts/IdContext';
import RecipientContext from '../../contexts/RecipientContext';
import shareMessage from '../../apis/apiKakao';

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

  &::-webkit-scrollbar {
    display: none;
  }

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

  @media screen and (max-width: 1247px) {
    position: fixed;
    bottom: 2.4rem;
    left: 2.4rem;
    right: 2.4rem;
  }
`;

const StyledToast = styled(Toast)`
  position: fixed;

  @media screen and (max-width: 767px) {
    bottom: 2.4rem;
  }
`;

export default function UsersRollingPage({ deletePage = false }) {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [copyURL, setCopyURL] = useState(false);
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const [items, setItems] = useState();
  const [response, setResponse] = useState({});

  const [isModal, setIsModal] = useState(null);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const openModal = (id) => {
    if (deletePage) return;

    setIsModal(id);
  };

  const handleClickEmojiPickerOpenList = () => {
    setEmojiPickerOpen((prev) => !prev);
  };

  const handleLoad = async () => {
    const { results } = await getRecipientMessages(params.createdId);

    setItems(results);
  };

  const handleSumbitAdressShare = async () => {
    if (deletePage) {
      return alert('편집 페이지는 공유할 수 없습니다');
    }

    try {
      await navigator.clipboard.writeText(
        process.env.REACT_APP_BASE_URL + location.pathname
      );
      setCopyURL(true);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setCopyURL(false), 5000);
    }
  };
  //location.pathname앞에 baseUrl 필요

  const handleShare = () => {
    shareMessage(params.createdId);
  };

  const handleDeleteMessage = async (id) => {
    try {
      await deleteMessages(id);
    } catch (error) {
      return;
    } finally {
      setIsDeleteSuccess(true);
    }
  };

  const handleDeleteRecipient = async () => {
    try {
      await deleteRecipient(params.createdId);
      navigate('/list');
    } catch (error) {
      return;
    }
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
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY); // 사용하려는 앱의 JavaScript 키 입력
      }
    }
  }, []);

  useEffect(() => {
    handleLoad();
    handleGetInfo();
  }, [isDeleteSuccess]);

  return (
    <>
      <Header>
        {width > 767 ? (
          <HeaderTop width={width} users={true} />
        ) : (
          <ToRecipient>To. {response.name}</ToRecipient>
        )}
      </Header>

      <RecipientContext.Provider value={response}>
        <IdContext.Provider value={params.createdId}>
          <Header>
            {isLoadingSuccess ? (
              <HeaderBottom
                width={width}
                onShare={handleShare}
                onShareURLClick={handleSumbitAdressShare}
                onClick={handleClickEmojiPickerOpenList}>
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
        <AlignButton>
          {deletePage && (
            <DeleteButton size="small" onClick={handleDeleteRecipient}>
              페이지 삭제하기
            </DeleteButton>
          )}
          <Link
            to={deletePage ? `/post/${params.createdId}` : 'edit'}
            style={{ textDecoration: 'none' }}>
            <DeleteButton size="small">
              {deletePage ? '저장하기' : '삭제하기'}
            </DeleteButton>
          </Link>
        </AlignButton>
        <RollingPageCardList
          onClick={openModal}
          onDelete={handleDeleteMessage}
          isModal={isModal}
          setIsModal={setIsModal}
          items={items}
          deletePage={deletePage}></RollingPageCardList>

        {copyURL && <StyledToast></StyledToast>}
      </Main>
    </>
  );
}
