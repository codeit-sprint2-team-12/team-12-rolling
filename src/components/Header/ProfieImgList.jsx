import styled from 'styled-components';
import noneImg from '../../assets/noneProfileImg.png';

const ImgItem = styled.img`
  display: flex;
  width: 2.8rem;
  height: 2.8rem;
  justify-content: center;
  align-items: center;

  border-radius: 5rem;
  border: 1.5px solid var(--white, #fff);
  background: var(--white, #fff);
`;

export default function ProfileImgList({ count = '' }) {
  return (
    <>
      <ImgItem src={noneImg} />
      <ImgItem src={noneImg} />
      <ImgItem src={noneImg} />
      <ImgItem src={noneImg} />
    </>
  );
}
