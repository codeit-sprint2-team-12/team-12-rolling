import styled from 'styled-components';
import checkImg from '../../assets/check.svg';
import { Children, useState } from 'react';

const COLOR = {
  green: 'var(--green-200, #d0f5c3)',
  blue: ' var(--blue-200, #B1E4FF)',
  orange: ' var(--orange-200, #FFE2AD)',
  purple: 'var(--purple-200, #ECD9FF)',
};

const OptionBox = styled.button`
  display: flex;
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${({ color }) => (color ? COLOR[color] : COLOR.green)};
  cursor: pointer;
`;

const IsCheckButton = styled.img`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1rem;
  align-items: flex-start;
  border-radius: 10rem;
  background: var(--gray-500, #555);
`;

const Option = ({ color }) => {
  const [check, setCheck] = useState(false);

  const handleClickOption = (e) => {
    setCheck((prev) => !prev);
  };

  return (
    <OptionBox onClick={handleClickOption} check={check} color={color}>
      {check && <IsCheckButton src={checkImg} alt="check" />}
    </OptionBox>
  );
};

export default function OptionList() {
  //const handleAll = (e) => {};

  return (
    <>
      <Option color="green" />
      <Option color="orange" />
      <Option color="purple" />
      <Option color="blue" />
    </>
  );
}

// 선택 자동해제가 안됨
