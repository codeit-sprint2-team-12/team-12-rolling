import styled from 'styled-components';
import logoImg from '../../assets/logo.svg';
import OutlinedBtn from '../Button/OutlinedBtn';

const LogoImg = styled.img`
  cursor: pointer;
`;
function handleHomeClick(e) {
  window.location.href = '/';
}
function handlePaperClick(e) {
  window.location.href = '/post';
}

export default function HeaderTop({ width, users = false }) {
  return (
    <>
      <LogoImg src={logoImg} alt="로고" onClick={handleHomeClick} />
      {users ? (
        width > 1247 && (
          <OutlinedBtn size="sm" onClick={handlePaperClick}>
            롤링 페이퍼 만들기
          </OutlinedBtn>
        )
      ) : (
        <OutlinedBtn size="sm" onClick={handlePaperClick}>
          롤링 페이퍼 만들기
        </OutlinedBtn>
      )}
    </>
  );
}
