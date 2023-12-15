import styled from 'styled-components';
import { useState } from 'react';

const InputStyle = styled.input`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
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
    border: 2px solid var(--gray-700, #3a3a3a);
    background: var(--white, #fff);
  }

  &:focus {
    border: 2px solid var(--gray-500, #555);
    background: var(--white, #fff);
    color: var(--gray-900, #181818);
  }
`;

const Span = styled.span`
  color: var(--Error, #dc3a3a);
`;

function Input({ placeholder, postData, onChange }) {
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
    onChange({ ...postData, name: e.target.value });
  };

  return (
    <div>
      <InputStyle
        $iserror={isError}
        placeholder={placeholder}
        onBlur={blurHandler}
        onFocus={focusHandler}
        onChange={handleChange}
      />
      {isError ? <Span>{isError}</Span> : null}
    </div>
  );
}

export default Input;
