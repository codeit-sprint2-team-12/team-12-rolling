import { useNavigate, useParams } from 'react-router-dom';
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
import { postMessages } from '../../apis/apiRecipients';

const RELATIONSHIP = ['지인', '친구', '동료', '가족'];
const FONTS = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];
function CreateMessagePage() {
  const { createdId } = useParams();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [profileImages, setProfileImages] = useState([]);
  const [postData, setPostData] = useState({
    team: '2-12',
    recipientId: createdId,
    sender: '',
    profileImageURL: ProfileDefaultImg,
    relationship: '지인',
    content: '',
    font: 'Noto Sans',
  });

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result;
    try {
      setIsSubmitSuccess(false);
      result = await postMessages(postData);
    } catch (error) {
      console.log(error);
      return;
    }
    setIsSubmitSuccess(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    if (isSubmitSuccess) {
      navigate(`/post/${createdId}`);
    }
  }, [isSubmitSuccess]);

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
          selectedProfileImg={postData.profileImageURL}
        />
        <Title>상대와의 관계</Title>
        <DropdownBox
          listItems={RELATIONSHIP}
          onChange={handleChange}
          target="relationship">
          {postData.relationship}
        </DropdownBox>
        <Title>내용을 입력해주세요</Title>
        <TextEdit onChange={handleChange} />
        <Title>폰트선택</Title>
        <DropdownBox listItems={FONTS} onChange={handleChange} target="font">
          {postData.font}
        </DropdownBox>
        <PrimaryBtn
          disabled={!postData.sender || !postData.content}
          onClick={handleSubmit}>
          생성하기
        </PrimaryBtn>
      </RecipientForm>
    </>
  );
}

export default CreateMessagePage;
