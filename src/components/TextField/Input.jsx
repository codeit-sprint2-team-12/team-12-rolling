import styled from 'styled-components';
import { useState } from 'react';

const InputDivStyle = styled.div`
  position: relative;
`;

const InputStyle = styled.input`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  outline: none;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: ${({ $iserror }) =>
    $iserror
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
    border: 1px solid var(--gray-700, #3a3a3a);
    background: var(--white, #fff);
  }

  &:focus {
    outline: 1px solid var(--gray-500, #555);
    background: var(--white, #fff);
    color: var(--gray-900, #181818);
  }
`;

const SpanStyle = styled.span`
  color: var(--Error, #dc3a3a);
  position: absolute;
  bottom: -1.2rem;
  left: 0.1rem;
`;

function Input({ placeholder, onChange, target }) {
  const [isError, setIsError] = useState('');

  const blurHandler = (e) => {
    if (!e.target.value) {
      setIsError('이름을 입력해주세요');
    } else {
      setIsError('');
    }
  };
  const focusHandler = () => {
    setIsError('');
  };

  const handleChange = (e) => {
    onChange(target, e.target.value);
  };

  return (
    <InputDivStyle>
      <InputStyle
        $iserror={isError}
        placeholder={placeholder}
        onBlur={blurHandler}
        onFocus={focusHandler}
        onChange={handleChange}
      />
      {isError ? <SpanStyle>{isError}</SpanStyle> : null}
    </InputDivStyle>
  );
}

export default Input;
