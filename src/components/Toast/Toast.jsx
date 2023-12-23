import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const CheckIcon = styled(FaCheckCircle)`
  color: green;
  width: 2.4rem;
  height: 2.4rem;
`;

const CloseIcon = styled(IoMdClose)`
  width: 2.4rem;
  height: 2.4rem;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const ToastContainer = styled.div`
  display: flex;
  padding: 1.9rem 3rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.8rem;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  color: var(--white, #fff);
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;

  @media screen and (min-width: 375px) {
    max-width: 52.4rem;
    height: 6.4rem;
    position: fixed;
    bottom: 8.8rem;
    right: 2.4rem;
    left: 2.4rem;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 52.4rem;
    height: 6.4rem;
    bottom: 5rem;
    margin: 0 auto;
  }
`;

function Toast({ className }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCloseClick = () => {
    setIsClicked(true);
  };

  return (
    !isClicked && (
      <ToastContainer className={className}>
        <TextContainer>
          <CheckIcon />
          URL이 복사 되었습니다.
        </TextContainer>
        <CloseIcon onClick={handleCloseClick} />
      </ToastContainer>
    )
  );
}

export default Toast;
