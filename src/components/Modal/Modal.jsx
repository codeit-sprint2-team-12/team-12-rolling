import styled from 'styled-components';
import PrimaryBtn from '../Button/PrimaryBtn';
import noneImg from '../../assets/noneProfileImg.png';
import {
  ProfileBox,
  ProfileImg,
  ProfileText,
  MakeDate,
  formatDate,
} from '../Card/Card';
import Badge from '../Badge/Badge';

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
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

  @media screen and (max-width: 1247px) {
    width: 60rem;
    height: 47.6rem;
  }

  @media screen and (max-width: 767px) {
    width: 90vw;
    height: auto;
  }
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

const CheckButton = styled(PrimaryBtn)`
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translate(-50%, 0);
  width: 12rem;
`;

export default function Modal({ setIsModal, ...info }) {
  return (
    <ModalBackground>
      <ModalContainer>
        <ProfileBox>
          <ProfileImg
            src={info.profileImageURL || noneImg}
            alt="프로필 이미지"
          />
          <ProfileText>
            <h1>
              <span>From. </span>
              {info.sender}
            </h1>
            <Badge relationship={info.relationship} />
          </ProfileText>
          <MakeDate>{formatDate(info.createdAt)}</MakeDate>
        </ProfileBox>
        <TextBox>{info.content}</TextBox>
        <CheckButton onClick={() => setIsModal(null)} size="regular">
          확인
        </CheckButton>
      </ModalContainer>
    </ModalBackground>
  );
}
