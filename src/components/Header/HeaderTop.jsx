import logoImg from '../../assets/logo.svg';
import OutlinedBtn from '../Button/OutlinedBtn';

export default function HeaderTop() {
  return (
    <>
      <img src={logoImg} alt="로고" />
      <OutlinedBtn size="sm">롤링 페이퍼 만들기</OutlinedBtn>
    </>
  );
}
