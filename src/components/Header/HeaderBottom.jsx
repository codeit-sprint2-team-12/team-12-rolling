import { children } from 'react';
import OutlinedButton from '../Button/OutlinedButton';
import styled from 'styled-components';
import { GoShare } from 'react-icons/go';

export default function HeaderBottom({ children }) {
  const ToRecipient = styled.h1`
    color: var(--gray-800, #2b2b2b);

    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.2re
    letter-spacing: -0.028rem;
  `;

  return (
    <>
      <ToRecipient>{children}</ToRecipient>
      <div>
        <OutlinedButton size="sm"></OutlinedButton>
        <OutlinedButton size="sm"></OutlinedButton>
      </div>
    </>
  );
}
