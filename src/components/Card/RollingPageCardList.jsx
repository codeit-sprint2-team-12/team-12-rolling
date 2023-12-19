import styled from 'styled-components';
import Card from './Card';
import { PlusButtonStyle } from '../Button/PlusBtn';
import { FaPlus } from 'react-icons/fa6';
import { useState } from 'react';

const CardListup = styled.article`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;

  @media screen and (max-width: 1247px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardBox = styled.section`
  position: relative;
  width: 38.4rem;
  height: 28rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  @media screen and (max-width: 1247px) {
    width: 100%;
  }
`;

const AddCardsBtn = styled(PlusButtonStyle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function RollingPageCardList({
  goDeletePage,
  items, // 이 {}는 프롭. =는 디폴트값
}) {
  const [openModal, setOpenModal] = useState(false);

  const openClickModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <CardListup>
      {goDeletePage ? null : (
        <CardBox>
          <AddCardsBtn>
            <FaPlus />
          </AddCardsBtn>
        </CardBox>
      )}
      {items?.map((item) => {
        //여기서 item은 파라미터
        return (
          <>
            <CardBox onClick={openClickModal}>
              <Card
                key={item.id}
                openModal={openModal}
                goDeletePage={goDeletePage}
                item={item}
              />
            </CardBox>
          </>
        );
      })}
    </CardListup>
  );
}
