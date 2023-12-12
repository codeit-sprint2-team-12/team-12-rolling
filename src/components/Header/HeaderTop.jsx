import logoImg from '../../assets/logo.svg';
import OutlinedButton from '../Button/OutlinedButton';

export default function HeaderTop() {
  return (
    <>
      <img src={logoImg} alt="로고" />
      <OutlinedButton size="md">롤링 페이퍼 만들기</OutlinedButton>
    </>
  );
}
