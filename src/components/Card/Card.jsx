import styled from 'styled-components';
import noneImg from '../../assets/noneProfileImg.png';

const CardBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
const ProfileBox = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.5rem;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 10rem;
    border: 1px solid var(--gray-200, #eee);
    background: var(--white, #fff);
  }
`;

/* Font/18 Regular */

const TextBox = styled.p`
  width: 33.6rem;
  height: 10.6rem;
  flex-shrink: 0;
  overflow: hidden;
  color: var(--gray-600, #4a4a4a);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
  border-top: 0.1rem solid var(--gray-200, #eee);
`;
export default function Card() {
  return (
    <CardBox>
      <ProfileBox>
        <img src={noneImg} alt="프로필 이미지" />
        <h1>from . ddd</h1>
        <p>badge</p>
      </ProfileBox>
      <TextBox></TextBox>
    </CardBox>
  );
}
