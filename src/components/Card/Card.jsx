import styled from 'styled-components';
import noneImg from '../../assets/noneProfileImg.png';
import Badge from '../Badge/Badge';
import deleteBtn from '../../assets/deleted.svg';
import OutlinedBtn from '../Button/OutlinedBtn';

const FONT = {
  'Noto Sans': 'Noto Sans KR',
  Pretendard: 'Pretendard Variable',
  나눔명조: 'Nanum Myeongjo',
  '나눔손글씨 손편지체': 'Nanum Brush Script',
};

export const CardBoxStyle = styled.section`
  position: relative;
  width: 38.4rem;
  height: 28rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  @media screen and (max-width: 1247px) {
    width: 100%;
  }
`;

export const ProfileBoxStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.4rem;
`;

export const ProfileTextStyle = styled.div`
  > h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    margin: 0.6rem 0;

    > span {
      font-weight: 400;
    }
  }
`;

export const ProfileImgStyle = styled.img`
  padding: 0;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  border: 1.5px solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;

const TextBoxStyle = styled.p`
  margin: 1.6rem auto;
  padding-top: 1.6rem;
  width: 100%;
  height: 10.6rem;

  color: var(--gray-600, #4a4a4a);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  align-items: center;
  font-family: ${({ $font }) => ($font ? FONT[$font] : 'Pretendard Variable')};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
  border-top: 0.1rem solid var(--gray-200, #eee);
`;

export const MakeDateStyle = styled.span`
  position: absolute;
  bottom: 2rem;
  color: var(--gray-400, #999);

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;
`;

export const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};

const DeleteBtnStyle = styled(OutlinedBtn)`
  position: absolute;
  padding: 0.8rem !important;
  right: 3rem;
  display: 'inline-flex';
`;

export default function Card({
  onDelete,
  deletePage,
  onClick,
  profileImageURL = null,
  ...info
}) {
  return (
    <CardBoxStyle onClick={onClick}>
      <ProfileBoxStyle>
        <ProfileImgStyle src={profileImageURL || noneImg} alt="프로필 이미지" />
        <ProfileTextStyle>
          <h1>
            <span>From. </span>
            {info.sender}
          </h1>
          <Badge relationship={info.relationship} />
        </ProfileTextStyle>
        {deletePage && (
          <DeleteBtnStyle size="md" onClick={() => onDelete(info.messageId)}>
            <img src={deleteBtn} alt="삭제하기" />
          </DeleteBtnStyle>
        )}
      </ProfileBoxStyle>
      <TextBoxStyle $font={info.font}>{info.content}</TextBoxStyle>
      <MakeDateStyle>{formatDate(info.createdAt)}</MakeDateStyle>
    </CardBoxStyle>
  );
}
