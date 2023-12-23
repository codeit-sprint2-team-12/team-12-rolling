import styled from 'styled-components';
import Card, { CardBoxStyle } from './Card';
import { PlusButtonStyle } from '../Button/PlusBtn';
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

const CardListUpStyle = styled.article`
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

const AddCardBtnStyle = styled(PlusButtonStyle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function RollingPageCardList({
  deletePage,
  onClick,
  items,
  isModal,
  setIsModal,
  onDelete,
}) {
  return (
    <CardListUpStyle>
      {deletePage ? null : (
        <CardBoxStyle>
          <Link to="message">
            <AddCardBtnStyle>
              <FaPlus />
            </AddCardBtnStyle>
          </Link>
        </CardBoxStyle>
      )}
      {items?.map((item) => {
        return (
          <>
            <Card
              onDelete={onDelete}
              onClick={() => {
                onClick(item.id);
              }}
              deletePage={deletePage}
              key={item.id}
              messageId={item.id}
              sender={item.sender}
              createdAt={item.createdAt}
              content={item.content}
              font={item.font}
              profileImageURL={item.profileImageURL}
              relationship={item.relationship}
            />

            {isModal === item.id && (
              <Modal
                setIsModal={setIsModal}
                key={item.id}
                sender={item.sender}
                createdAt={item.createdAt}
                content={item.content}
                font={item.font}
                profileImageURL={item.profileImageURL}
                relationship={item.relationship}></Modal>
            )}
          </>
        );
      })}
    </CardListUpStyle>
  );
}
