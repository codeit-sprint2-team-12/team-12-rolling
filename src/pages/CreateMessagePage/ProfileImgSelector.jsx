import styled from 'styled-components';
import ProfileDefaultImg from '../../assets/noneProfileImg.png';
import ProfileOptionContainer from './ProfileOptionContainer';

const SelectorContainerStyle = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;

  @media screen and (min-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 71.7rem;
  }
`;

const ProfileStatusIconStyle = styled.span`
  display: flex;
  flex-shrink: 0;
  padding: 2.4rem;
  width: 8rem;
  height: 8rem;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 10rem;
  background: ${({ $selectedProfileImg }) =>
    $selectedProfileImg
      ? `url(${$selectedProfileImg})`
      : `url(${ProfileDefaultImg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

function ProfileImgSelector({ profileImages, onChange, selectedProfileImg }) {
  return (
    <SelectorContainerStyle>
      <ProfileStatusIconStyle $selectedProfileImg={selectedProfileImg} />
      <ProfileOptionContainer
        profileImages={profileImages}
        onChange={onChange}
      />
    </SelectorContainerStyle>
  );
}

export default ProfileImgSelector;
