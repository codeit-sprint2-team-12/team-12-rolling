import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import HeaderTop from '../../components/Header/HeaderTop';
import RecipientForm from './RecipientForm';
import ToggleBtn from '../../components/Button/ToggleBtn';
import SubmitBtn from '../../components/Button/PrimaryBtn';
import ToInput from '../../components/TextField/Input';
import Selector from '../../components/Option/Option';
import Title from './Title';
import Subtitle from './Subtitle';
import { getBackgroundImages } from '../../apis/apiImages';
import { postRecipients } from '../../apis/apiRecipients';
import { useNavigate } from 'react-router-dom';
function CreateRecipientPage() {
  const [isActive, setIsActive] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [postData, setPostData] = useState({
    team: '2-12',
    name: '',
    backgroundColor: 'beige',
    backgroundImageURL: null,
  });
  const [createdId, setCreatedId] = useState(null);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result;
    try {
      setIsSubmitSuccess(false);
      result = await postRecipients(postData);
      setCreatedId(result.id);
    } catch (error) {
      return;
    }
    console.log(result);
    setIsSubmitSuccess(true);
  };

  const handleLoad = async () => {
    let result;
    try {
      result = await getBackgroundImages();
      setBackgroundImages([...result]);
    } catch (error) {
      return;
    }
  };

  const handleChange = (target, value) => {
    setPostData({ ...postData, [target]: value });
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    if (isSubmitSuccess) {
      console.log(createdId);
      navigate(`./${createdId}`);
    }
  }, [isSubmitSuccess]);

  return (
    <div>
      <Header>
        <HeaderTop />
      </Header>
      <RecipientForm>
        <div className="RecipientForm__input-box">
          <Title>To.{postData.name}</Title>
          <ToInput
            placeholder="받는 사람 이름을 입력해주세요."
            onChange={handleChange}
            target="name"
          />
        </div>
        <div className="RecipientForm__title-box">
          <Title>배경 화면을 선택해 주세요</Title>
          <Subtitle>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Subtitle>
        </div>
        <div className="RecipientForm__option-box">
          <ToggleBtn onClick={setIsActive} isActive={isActive} />
          <Selector
            isImage={isActive}
            onClick={handleChange}
            backgroundImages={backgroundImages}
          />
        </div>
        <div className="RecipientForm__submit-box">
          <SubmitBtn disabled={!postData.name} onClick={handleSubmit}>
            생성하기
          </SubmitBtn>
        </div>
      </RecipientForm>
    </div>
  );
}

export default CreateRecipientPage;
