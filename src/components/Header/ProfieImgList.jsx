import styled from 'styled-components';
import noneImg from '../../assets/noneProfileImg.png';

const ImgItems = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 5rem;
  border: 1.5px solid var(--white, #fff);
  width: 2.8rem;
  height: 2.8rem;

  &:not(:first-child) {
    margin-left: -1.2rem;
  }

  @media (max-width: 767px) {
    display: ${({ nav }) => (nav ? 'none' : 'inline')};
  }
`;

const CountImg = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3rem;
  background: #fff;
  padding: 0.5rem 0.6rem;
  text-align: center;
  margin-left: -1.2rem;
  height: 2.8rem;

  border: ${({ nav }) => (nav ? '0.1rem solid #e3e3e3' : 'none')};

  color: var(--gray-500, #555);

  /* Font/12 Regular */

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
  letter-spacing: -0.006rem;

  @media (max-width: 767px) {
    display: ${({ nav }) => (nav ? 'none' : 'flex')};
  }
`;

const CountText = styled.p`
  margin-left: 1.1rem;
  color: var(--gray-900, #181818);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;

  > span {
    font-weight: 700;
  }

  @media (max-width: 767px) {
    display: ${({ nav }) => (nav ? 'none' : 'inline')};
  }
`;

// 미디어쿼리 부분적용 이슈

export default function ProfileImgList({
  profileImageURL = '',
  count = '24',
  nav = true,
}) {
  return (
    <>
      <ImgItems src={profileImageURL || noneImg} />
      <ImgItems src={profileImageURL || noneImg} />
      <ImgItems src={profileImageURL || noneImg} />
      <CountImg nav={nav}> +{count - 3}</CountImg>
      <CountText>
        <span>{count}</span>명이 작성했어요!
      </CountText>
    </>
  );
}
