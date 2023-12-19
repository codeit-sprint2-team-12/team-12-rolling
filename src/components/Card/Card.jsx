import styled from 'styled-components';
import noneImg from '../../assets/noneProfileImg.png';
import Badge from '../Badge/Badge';
import deleteBtn from '../../assets/deleted.svg';
import OutlinedBtn from '../Button/OutlinedBtn';
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';

export const ProfileBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.4rem;
`;

export const ProfileText = styled.div`
  > h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    margin: 0.6rem 0;

    > span {
      font-weight: 400;
    }
  }
`;

export const ProfileImg = styled.img`
  padding: 0;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  border: 1.5px solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;

/* Font/18 Regular */
const TextBox = styled.p`
  margin: 1.6rem auto;
  padding-top: 1.6rem;
  width: 100%;
  height: 10.6rem;

  color: var(--gray-600, #4a4a4a);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
  border-top: 0.1rem solid var(--gray-200, #eee);
`;

const MakeDate = styled.span`
  position: absolute;
  bottom: 2rem;
  color: var(--gray-400, #999);

  /* Font/12 Regular */

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
  letter-spacing: -0.006rem;
`;

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};
// 함수 겹침 나중에 util로 합치기

const DeleteBtn = styled(OutlinedBtn)`
  position: absolute;
  padding: 0.8rem !important;
  right: 3rem;
  display: ${({ deletePage }) => (deletePage ? 'inline-flex' : 'none')};
`;

export default function Card({
  deletePage,
  item,
  onCloseModal,
  openModal,
  isModalOpen,
}) {
  const {
    sender,
    createdAt,
    content,
    profileImageURL = '',
    relationship,
  } = item;

  return (
    <>
      <div>
        <ProfileBox>
          <ProfileImg src={profileImageURL || noneImg} alt="프로필 이미지" />
          <ProfileText>
            <h1>
              <span>From. </span>
              {sender}
            </h1>
            <Badge relationship={relationship} />
          </ProfileText>

          <DeleteBtn size="md" deletePage={deletePage}>
            <img src={deleteBtn} alt="삭제하기" />
          </DeleteBtn>
        </ProfileBox>
        <TextBox>{content}</TextBox>
        <MakeDate>{formatDate(createdAt)}</MakeDate>
      </div>
      {isModalOpen && (
        <Modal item={item} openModal={openModal} onCloseModal={onCloseModal} />
      )}
    </>
  );
}
