import styled from 'styled-components';
import { useState } from 'react';
import ArrowDown from '../../assets/arrow_down.png';
import ArrowUp from '../../assets/arrow_top.png';

const BtnDropdown = styled.button`
  display: flex;
  position: relative;
  justify-content: space-between;
  font-size: 1.6rem;
  width: '32rem';
  padding: 1.2rem 1.6rem;
  align-items: center;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;
  background: var(--white, #fff);
  border: ${({ isError }) =>
    isError
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};

  &:hover {
    border: 1px solid var(--gray-500, #555);
  }

  &:active {
    border: 2px solid var(--gray-700, #3a3a3a);
    background: var(--white, #fff);
  }

  &:disabled {
    border: 1px solid var(--gray-300, #ccc);
    background: var(--gray-100, #f6f6f6);
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

export const DropdownUl = styled.ul`
  position: absolute;
  display: inline-flex;
  padding: 1rem 0.1rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.8rem;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const DropdownList = styled.li`
  display: flex;
  width: 31.6rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;

  &:hover {
    background: var(--gray-100, #f6f6f6);
    outline: none;
  }
`;

const DropdownIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
`;

const Span = styled.span`
  color: var(--Error, #dc3a3a);
`;

export const DropdownItems = ({ children }) => {
  return (
    <div>
      <DropdownList>{children}</DropdownList>
    </div>
  );
};

function DropdownBox({ children, nav = false }) {
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setIsError(false);
  };

  const onBlur = () => {
    setOpen(false);
    setIsError(true);
  };
  return (
    <div>
      <BtnDropdown
        nav={nav}
        onClick={handleOpen}
        isError={isError}
        onBlur={onBlur}
      >
        <span>{children}</span>

        <DropdownIcon src={open ? ArrowDown : ArrowUp} />
      </BtnDropdown>
      {isError ? <Span>Error Message</Span> : null}
      {open ? (
        <DropdownUl>
          <DropdownItems>Text</DropdownItems>
          <DropdownItems>Text</DropdownItems>
          <DropdownItems>Text</DropdownItems>
          <DropdownItems>Text</DropdownItems>
        </DropdownUl>
      ) : null}
    </div>
  );
}
export default DropdownBox;
