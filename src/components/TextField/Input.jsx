import styled from 'styled-components';
import { useState } from 'react';

const InputStyle = styled.input`
  display: flex;
  width: 32rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: ${({ isError }) =>
    isError
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};
  background: var(--white, #fff);

  &:disabled {
    background: var(--gray-100, #f6f6f6);
  }

  &:hover {
    border: 1px solid var(--gray-500, #555);
    background: var(--white, #fff);
  }

  &:active {
    border: 2px solid var(--gray-700, #3a3a3a);
    background: var(--white, #fff);
  }

  &:focus {
    border: 2px solid var(--gray-500, #555);
    background: var(--white, #fff);
    color: var(--gray-900, #181818);
  }

  /* @media (min-width: 375px) {
    display: flex;
    width: 72rem;
    padding: 1.2rem 1.6rem;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1248px) {
    > div {
      padding: 1.1rem 0rem;
      max-width: 120.7rem;
    }
  } */
`;

const Span = styled.span`
  color: var(--Error, #dc3a3a);
`;

function Input() {
  const [isError, setIsError] = useState(false);

  const blurHandler = () => {
    // 에러인지 아닌지 확인
    setIsError(true);
  };
  const focusHandler = () => {
    setIsError(false);
  };

  return (
    <div>
      <InputStyle
        isError={isError}
        placeholder="Placeholder"
        onBlur={blurHandler}
        onFocus={focusHandler}
      />
      {isError ? <Span> Error Message</Span> : null}
    </div>
  );
}

export default Input;
