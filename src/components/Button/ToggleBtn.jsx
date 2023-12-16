import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  width: 24.4rem;
  height: 4rem;
  flex-shrink: 0;

  > button {
    border: none;
    width: 12.2rem;
    height: 4rem;
    border-radius: 0.6rem;
    background-color: #f6f6f6;
    color: var(--gray-900, #181818);
    text-align: center;
    font-size: 1.6rem;
    line-height: 2.6rem; /* 162.5% */
    letter-spacing: -0.016rem;
  }

  & .toggle-selected {
    background: var(--white, #fff);
    border: 2px solid var(--purple-600, #9935ff);
    color: var(--purple-700, #861dee);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export default function ToggleButton({ className }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <ToggleStyle className={className}>
      <button
        className={isActive ? '' : 'toggle-selected'}
        onClick={handleClick}
      >
        컬러
      </button>
      <button
        className={isActive ? 'toggle-selected' : ''}
        onClick={handleClick}
      >
        이미지
      </button>
    </ToggleStyle>
  );
}
