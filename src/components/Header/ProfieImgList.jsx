import styled from 'styled-components';

const ImgItemsStyle = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 5rem;
  border: 1.5px solid var(--white, #fff);
  width: 2.8rem;
  height: 2.8rem;

  &:not(:first-child) {
    margin-left: -1.2rem;
  }
`;

const CountImgStyle = styled.div`
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

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;

  @media (max-width: 767px) {
    display: ${({ nav }) => (nav ? 'none' : 'flex')};
  }
`;

const CountTextStyle = styled.p`
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

const ImgListStyle = styled.div`
  display: flex;
  min-height: 2.8rem;
  gap: -1.2rem;
`;

export default function ProfileImgList({
  nav = false,
  recentMessages = [],
  messageCount = 0,
}) {
  return (
    <>
      <ImgListStyle>
        {recentMessages.map((item) => {
          return <ImgItemsStyle src={item.profileImageURL} alt="프로필" />;
        })}
        {messageCount > 3 && (
          <CountImgStyle nav={nav}> +{messageCount - 3}</CountImgStyle>
        )}
      </ImgListStyle>
      <CountTextStyle>
        <span>{messageCount}</span>명이 작성했어요!
      </CountTextStyle>
    </>
  );
}
