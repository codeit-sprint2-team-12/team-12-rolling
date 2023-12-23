import styled from 'styled-components';
import Subtitle from '../CreateRecipientPage/Subtitle';

const OptionContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ProfileOptionListStyle = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const ProfileOptionItemStyle = styled.li`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10rem;
  border: 1px solid var(--gray-200, #eee);
  background: ${({ $urls }) => ($urls ? `url(${$urls})` : '#fff')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function ProfileOptionContainer({ profileImages, onChange }) {
  const handleClick = (e) => {
    onChange('profileImageURL', profileImages[e.target.id]);
  };

  return (
    <OptionContainerStyle>
      <Subtitle>프로필 이미지를 선택해 주세요!</Subtitle>
      <ProfileOptionListStyle>
        {profileImages.map((urls, index) => {
          return (
            <ProfileOptionItemStyle
              key={urls}
              $urls={urls}
              id={index}
              onClick={handleClick}
            />
          );
        })}
      </ProfileOptionListStyle>
    </OptionContainerStyle>
  );
}

export default ProfileOptionContainer;
