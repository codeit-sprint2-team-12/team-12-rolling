import styled from 'styled-components';
import logoImg from '../../assets/logo.svg';
import OutlinedBtn from '../Button/OutlinedBtn';
import { useNavigate } from 'react-router-dom';

const LogoImg = styled.img`
  cursor: pointer;
`;

export default function HeaderTop({ width, users = false, isBtn = false }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };
  const handlePaperClick = () => {
    const recipientId = window.localStorage.getItem('recipientId');
    if (recipientId === null) {
      navigate('/post');
    } else {
      navigate(`/post/${recipientId}`);
    }
  };

  return (
    <>
      <LogoImg src={logoImg} alt="로고" onClick={handleHomeClick} />
      {isBtn && (
        <OutlinedBtn size="sm" onClick={handlePaperClick}>
          롤링 페이퍼 만들기
        </OutlinedBtn>
      )}
    </>
  );
}
