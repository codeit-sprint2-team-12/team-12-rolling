import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa6';

const PlusSize = {
  width: '24px',
  height: '24px',
};

const PlusBtn = ({ children, disabled }) => {
  return (
    <PlusButtonStyle disabled={disabled}>
      <FaPlus style={PlusSize} />
    </PlusButtonStyle>
  );
};

export const PlusButtonStyle = styled.button`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  border: none;
  color: var(--white);
  background: var(--gray-500, #555);

  &:hover {
    background: var(--gray-600, #4a4a4a);
  }
  &:active {
    background: var(--gray-500, #555);
  }

  &:focus {
    background: var(--gray-700, #3a3a3a);
  }

  &:disabled {
    background: var(--gray-300, #ccc);
  }
`;

export default PlusBtn;
