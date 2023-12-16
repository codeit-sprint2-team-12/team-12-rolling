import styled from 'styled-components';
import logoImg from '../../assets/logo.svg';
import OutlinedBtn from '../Button/OutlinedBtn';

const LogoImg = styled.img`
cursor: pointer;
`
function handleHomeClick(e) {
  window.location.href = '/';
}
function handlePaperClick(e) {
  window.location.href = '/post';
}

export default function HeaderTop() {
  return (
    <>
      <LogoImg  src={logoImg} alt="로고" onClick={handleHomeClick} />
      <OutlinedBtn size="sm" onClick={handlePaperClick}>
        롤링 페이퍼 만들기
      </OutlinedBtn>
    </>
  );
}

