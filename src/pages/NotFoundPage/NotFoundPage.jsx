import styled from 'styled-components';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import { useNavigate } from 'react-router-dom';

const MainStyle = styled.main`
  display: flex;
  padding: 2.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: var(--Surface, #f6f8ff);
`;

const ArticleStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.4rem;
  background: #fff;
  border-radius: 4rem;
  color: var(--gray-500, #555);
  @media screen and (min-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 76.8px) {
    max-width: 76.8rem;
  }
  & h1 {
    @media screen and (min-width: 375px) {
      font-size: 10rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 16rem;
    }
  }
  & h2 {
    text-align: center;
    @media screen and (min-width: 375px) {
      font-size: 2rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`;

function NotFoundPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <MainStyle>
        <ArticleStyle>
          <h1>OOPS!</h1>
          <h2>페이지를 찾을 수 없습니다.</h2>
          <PrimaryBtn onClick={handleClick}>되돌아가기</PrimaryBtn>
        </ArticleStyle>
      </MainStyle>
    </>
  );
}

export default NotFoundPage;
