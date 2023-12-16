import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import HeaderTop from '../../components/Header/HeaderTop';
import RecipientForm from '../CreateRecipientPage/RecipientForm';
import Input from '../../components/TextField/Input';
import Title from '../../pages/CreateRecipientPage/Title';
import ProfileImgSelector from './ProfileImgSelector';
import ProfileDefaultImg from '../../assets/noneProfileImg.png';
import TextEdit from '../../components/TextField/TextEdit';
import { getProfileImages } from '../../apis/apiImages';
import { useEffect, useState } from 'react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import DropdownBox from '../../components/TextField/Dropdown';

function CreateMessagePage() {
  const { createdId } = useParams();
  const [profileImages, setProfileImages] = useState([]);
  const [postData, setPostData] = useState({
    team: '2-12',
    recipientId: createdId,
    sender: '',
    profileImageURL: ProfileDefaultImg,
    relationship: '친구',
    content: '',
    font: 'Noto Sans',
  });

  const handleChange = (target, value) => {
    setPostData({ ...postData, [target]: value });
  };

  const handleLoad = async () => {
    let result;
    try {
      result = await getProfileImages();
      setProfileImages([...result]);
    } catch (error) {
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('dkd');
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header>
        <HeaderTop />
      </Header>
      <RecipientForm>
        <div className="RecipientForm__input-box">
          <Title>From.</Title>
          <Input
            placeholder="이름을 입력해주세요"
            onChange={handleChange}
            target="sender"
          />
        </div>
        <Title>프로필 이미지</Title>
        <ProfileImgSelector
          profileImages={profileImages}
          onChange={handleChange}
        />
        <Title>상대와의 관계</Title>
        <Title>내용을 입력해주세요</Title>
        <TextEdit onChange={handleChange} />
        <Title>폰트선택</Title>
        <PrimaryBtn onClick={handleSubmit}>생성하기</PrimaryBtn>
      </RecipientForm>
    </>
  );
}

export default CreateMessagePage;
