import React, { useState } from 'react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import styled from 'styled-components';
import CardList from '../../components/CardList/CardList';
import ArrowBtn from '../../components/Button/ArrowBtn';
import { getRecipients } from '../../apis/apiRecipients';
import { useNavigate } from 'react-router-dom';
const CardMain = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
const CardListContainer = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10rem;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (min-width: 767px) {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (min-width: 375px) {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CardArrowLeftStyle = styled.div`
  position: absolute;
  width: 4rem;
  margin: 21rem 0 10rem 8.5rem;
  z-index: 1;

  @media screen and (max-width: 1334px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const CardArrowRightStyle = styled.div`
  position: absolute;
  width: 4rem;
  margin: -25rem 121rem 50rem;
  z-index: 1;

  @media screen and (max-width: 1333px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const CardListTitle = styled.span`
  display: flex;
  margin: 10rem 0rem -7rem 10rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
`;

const CardListView = styled.div`
  width: 114rem;
  overflow: hidden;
`;

const CardListBox = styled.li`
  display: inline-flex;
  align-items: flex-start;
  align-items: center;
  gap: 1.25rem;
`;

const Footer = styled.footer`
  padding: 2.4rem 2.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 30%;

  @media screen and (max-width: 1333px) {
    width: 100%;
    height: 10.4rem;
    padding: 2.4rem 2.4rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

function CardListSection({
  id,
  title,
  data,
  scrollPosition,
  handleArrowClick,
}) {
  const { results } = data;
  const isLeftArrowVisible = scrollPosition > 0;
  const isRightArrowVisible = scrollPosition < results.length;
  return (
    <CardMain>
      <CardListTitle>{title}</CardListTitle>
      <CardArrowLeftStyle
        style={{ display: isLeftArrowVisible ? 'flex' : 'none' }}
        onClick={() => handleArrowClick(true, id)}>
        <ArrowBtn isLeft={true} />
      </CardArrowLeftStyle>
      <CardListContainer>
        <CardListView id={`${id}CardListView`}>
          <CardListBox>
            {results.map((item, index) => (
              <CardList key={index} cardData={item} />
            ))}
          </CardListBox>
        </CardListView>
      </CardListContainer>
      <CardArrowRightStyle
        style={{
          display:
            results.length > 4
              ? isRightArrowVisible
                ? 'flex'
                : 'none'
              : 'none',
        }}
        onClick={() => handleArrowClick(false, id)}>
        <ArrowBtn isLeft={false} />
      </CardArrowRightStyle>
    </CardMain>
  );
}

export default function ListMain() {
  const [scrollPositions, setScrollPositions] = useState({
    favorite: 0,
    new: 0,
  });

  const [receivedHottestData, setReceivedHottestData] = useState({});
  const [receivedNewestData, setReceivedNewestData] = useState({});
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false);

  const navigate = useNavigate();

  const handleArrowClick = (isLeft, id) => {
    const cardListView = document.getElementById(`${id}CardListView`);
    const cardWidth = cardListView.clientWidth;
    const currentPosition = scrollPositions[id];
    const newPosition = isLeft
      ? Math.max(currentPosition - cardWidth, 0)
      : Math.min(
          currentPosition + cardWidth,
          cardListView.scrollWidth - cardWidth
        );

    setScrollPositions({ ...scrollPositions, [id]: newPosition });
    cardListView.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  function handleListClick() {
    navigate('/post');
  }

  const handleLoad = async () => {
    try {
      const resultLike = await getRecipients('', 'like');
      const resultNew = await getRecipients('', 'new');

      setReceivedHottestData({ ...receivedHottestData, ...resultLike });
      setReceivedNewestData({ ...receivedNewestData, ...resultNew });
    } catch (error) {
      return;
    } finally {
      setIsLoadingSuccess(true);
    }
  };

  useState(() => {
    handleLoad();
  }, []);

  return (
    <main>
      {isLoadingSuccess && (
        <CardListSection
          id="favorite"
          title="인기 롤링 페이퍼 🔥"
          data={receivedHottestData}
          scrollPosition={scrollPositions['favorite']}
          handleArrowClick={handleArrowClick}
        />
      )}
      {isLoadingSuccess && (
        <CardListSection
          id="new"
          title="최근에 만든 롤링 페이퍼 ⭐️️"
          data={receivedNewestData}
          scrollPosition={scrollPositions['new']}
          handleArrowClick={handleArrowClick}
        />
      )}

      <Footer>
        <PrimaryBtn size="regular" onClick={handleListClick}>
          나도 만들어보기
        </PrimaryBtn>
      </Footer>
    </main>
  );
}
