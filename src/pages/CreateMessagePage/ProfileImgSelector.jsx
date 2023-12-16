import styled from 'styled-components';
import ProfileDefaultImg from '../../assets/noneProfileImg.png';
import ProfileOptionContainer from './ProfileOptionContainer';

const SelectorContainer = styled.div`
  width: 71.7rem;
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;

const ProfileStatusIcon = styled.span`
  display: flex;
  padding: 2.4rem;
  width: 8rem;
  height: 8rem;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 10rem;
  background: url(${ProfileDefaultImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

function ProfileImgSelector({ profileImages, onChange }) {
  return (
    <SelectorContainer>
      <ProfileStatusIcon />
      <ProfileOptionContainer
        profileImages={profileImages}
        onChange={onChange}
      />
    </SelectorContainer>
  );
}

export default ProfileImgSelector;
