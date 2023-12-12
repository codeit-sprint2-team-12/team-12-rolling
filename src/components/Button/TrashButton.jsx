import React from 'react';
import styled from 'styled-components';
import { LiaTrashAlt } from 'react-icons/lia';

const TrashButtonStyle = styled.button`
  display: inline-flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);

  &:hover {
    background: var(--gray-100, #f6f6f6);
  }
  &:active {
    background: var(--white, #fff);
  }

  &:focus {
    border: 1px solid var(--gray-500, #555);
  }

  &:disabled {
    background: var(--gray-300, #ccc);
    border: none;
  }
`;
const Trash = ({ children, disabled }) => {
  return (
    <TrashButtonStyle disabled={disabled}>
      <div>
        {children}
        <LiaTrashAlt />
      </div>
    </TrashButtonStyle>
  );
};
export default Trash;
