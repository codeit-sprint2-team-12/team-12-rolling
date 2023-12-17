import styled from 'styled-components';
import { useState } from 'react';

import ArrowDown from '../../assets/arrow_down.png';
import ArrowUp from '../../assets/arrow_top.png';

const BtnDropdown = styled.button`
  display: flex;
  position: relative;
  justify-content: space-between;
  font-size: 1.6rem;
  width: 32rem;
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

  @media (max-width: 767px) {
    display: flex;
    width: 32rem;
    padding: 1.2rem 1.6rem;
    align-items: center;
    gap: 1rem;
  }
`;

export const DropdownUl = styled.ul`
  position: absolute;
  z-index: 1;
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

export const DropdownItems = ({ children, onClick }) => {
  return (
    <div>
      <DropdownList onClick={onClick}>{children}</DropdownList>
    </div>
  );
};

function DropdownBox({ children, nav = false, listItems, onChange, target }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleBlur = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    onChange(target, e.target.dataset['value']);
  };

  return (
    <div onBlur={handleBlur}>
      <BtnDropdown nav={nav} onClick={handleOpen} type="button">
        <span>{children}</span>
        {open ? (
          <DropdownIcon src={ArrowDown} />
        ) : (
          <DropdownIcon src={ArrowUp} />
        )}
      </BtnDropdown>
      {open ? (
        <DropdownUl>
          {listItems.map((item) => {
            return (
              <DropdownList
                key={item}
                onMouseOver={handleChange}
                data-value={item}>
                {item}
              </DropdownList>
            );
          })}
        </DropdownUl>
      ) : null}
    </div>
  );
}
export default DropdownBox;
