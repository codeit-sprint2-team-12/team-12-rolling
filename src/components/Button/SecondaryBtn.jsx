import React from 'react';
import styled from 'styled-components';

const CommonButtonStyle = styled.button`
  display: inline-flex;
  padding: 0.7rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.6rem;
  color: var(--purple-600, #9935ff);
  background: var(--white, #fff);
  border: 0.1rem solid var(--purple-600, #9935ff);
  cursor: pointer;

  &:hover {
    border: 0.1rem solid var(--purple-700, #861dee);
    background: var(--purple-100, #f8f0ff);
  }
  &:active {
    border: 0.1rem solid var(--purple-600, #9935ff);
    background: var(--white, #fff);
  }

  &:focus {
    border: 0.1rem solid var(--purple-800, #6e0ad1);
    background: var(--white, #fff);
  }

  &:disabled {
    color: var(--white, #fff);
    background: var(--gray-300, #ccc);
    border: none;
  }
`;

const SecondaryBtn = ({ children, disabled }) => {
  return <CommonButtonStyle disabled={disabled}>{children}</CommonButtonStyle>;
};

export default SecondaryBtn;
