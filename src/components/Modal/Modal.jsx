import styled from 'styled-components';
import PrimaryBtn from '../Button/PrimaryBtn';
import noneImg from '../../assets/noneProfileImg.png';
import { ProfileBox, ProfileImg, ProfileText } from '../Card/Card';
import Badge from '../Badge/Badge';

const ModalBackground = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 6; */
`;

const ModalContainer = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  height: 47.6rem;
  padding: 4.3rem;
  border-radius: 1.6rem;
  background: #fff;
  z-index: 3;
`;

/* Font/18 Regular */
const TextBox = styled.p`
  margin: 1.6rem auto;
  padding-top: 1.6rem;
  width: 100%;
  height: 10.6rem;
  border-top: 0.1rem solid var(--gray-200, #eee);
  overflow: auto;

  color: #5a5a5a;

  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem; /* 155.556% */
  letter-spacing: -0.018rem;
`;
/* Font/14 Regular */
const ModalDate = styled.p`
  position: absolute;
  top: 5.6rem;
  right: 4.5rem;
  color: var(--gray-400, #999);

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007rem;
`;

const CheckButton = styled(PrimaryBtn)`
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translate(-50%, 0);
  width: 12rem;
`;

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};

export default function Modal({ item }) {
  const {
    id,
    sender,
    createdAt,
    content,
    profileImageURL = '',
    relationship = '',
  } = item;

  return (
    <ModalBackground>
      <ModalContainer>
        <ProfileBox>
          <ProfileImg src={profileImageURL || noneImg} alt="프로필 이미지" />
          <ProfileText>
            <h1>
              <span>From. </span>
              {sender}
            </h1>
            <Badge relationship={relationship} />
          </ProfileText>
          <ModalDate>{formatDate(createdAt)}</ModalDate>
        </ProfileBox>
        <TextBox>{content}</TextBox>
        <CheckButton size="regular">확인</CheckButton>
      </ModalContainer>
    </ModalBackground>
  );
}
