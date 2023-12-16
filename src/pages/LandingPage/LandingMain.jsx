import styled from 'styled-components';
import landingImg1 from '../../assets/landingimg1.png';
import landingImg2 from '../../assets/landingimg2.png';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const Point01Text = `누구나 손쉽게, 온라인
롤링 페이퍼를 만들 수 있어요`;

const Point02Text = `서로에게 이모지로 감정을
표현해보세요`;

const TYPE = {
  left: {
    padding: '6rem 0 6rem 6rem',
    gap: '15.2rem',
    margin: '6rem auto 3rem',
    direction: 'column',
    justifyContent: 'flex-start',
  },
};

const Article = styled.article`
  display: flex;
  margin: ${({ type }) => (type ? TYPE[type].margin : '3rem auto')};
  border-radius: 1.6rem;
  background: var(--Surface, #f6f8ff);

  > section {
    width: 60%;
    flex-shrink: 0;

    > img {
      width: 100%;
    }
  }

  @media screen and (min-width: 375px) {
    flex-direction: ${({ type }) =>
      type ? TYPE[type].direction : 'column-reverse'};
    justify-content: ${({ type }) =>
      type ? TYPE[type].justifyContent : 'flex-end'};
    width: 90%;
    height: 40rem;

    > section {
      width: 50%;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: ${({ type }) =>
      type ? TYPE[type].direction : 'column-reverse'};
    justify-content: ${({ type }) =>
      type ? TYPE[type].justifyContent : 'flex-end'};
    width: 90%;
    height: 50rem;
    gap: 0;
  }

  @media screen and (min-width: 1248px) {
    flex-direction: row;
    width: 120rem;
    height: 32.4rem;
    padding: ${({ type }) =>
      type ? TYPE[type].padding : '6rem 19.2rem 6rem 0'};
    gap: ${({ type }) => (type ? TYPE[type].gap : '0')};
  }

  @media screen and (max-width: 1248px) {
    > section {
      width: 100%;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  padding: 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  > h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.015rem;
    white-space: pre-line;
  }

  > p {
    color: var(--gray-500);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.01125rem;
  }

  @media screen and(min-width: 375px) {
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 1248px) {
    margin: 4rem;
    > h1 {
      white-space: nowrap;
    }
  }
`;

const Point = styled.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  align-items: center;
  color: var(--white, #fff);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: -0.007rem;
  border-radius: 5rem;
  background: var(--purple-600, #9935ff);
`;

const Footer = styled.footer`
  width: 100%;
  height: 10.4rem;
  padding: 2.4rem 2.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

function handleListClick() {
  window.location.href = '/List';
}

function LandingMain() {
  return (
    <main>
      <Article type="left">
        <TextBox>
          <Point>point. 01</Point>
          <h1>{Point01Text}</h1>
          <p>로그인 없이 자유롭게 만들어요.</p>
        </TextBox>
        <section>
          <img src={landingImg1} alt="롤링 페이퍼 예시" />
        </section>
      </Article>

      <Article>
        <section>
          <img src={landingImg2} alt="롤링 페이퍼 예시" />
        </section>
        <TextBox>
          <Point>point. 02</Point>
          <h1>{Point02Text}</h1>
          <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </TextBox>
      </Article>
      <Footer>
        <PrimaryBtn size="regular" onClick={handleListClick}>
          구경해보기
        </PrimaryBtn>
      </Footer>
    </main>
  );
}

export default LandingMain;
