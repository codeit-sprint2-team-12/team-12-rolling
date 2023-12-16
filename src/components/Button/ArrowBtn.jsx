import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const ArrowSize = {
  width: '16px',
  height: '16px',
  'flex-shrink': '0',
};

const ArrowStyle = styled.button`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  fill: rgba(255, 255, 255, 0.9);
  stroke-width: 1px;
  stroke: var(--gray-300, #ccc);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
  backdrop-filter: blur(2px);
  border-radius: 100px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-300);
  }
`;

function ArrowBtn({ className, isLeft }) {
  return (
    <ArrowStyle className={className}>
      {isLeft ? (
        <MdKeyboardArrowLeft style={ArrowSize} />
      ) : (
        <MdKeyboardArrowRight style={ArrowSize} />
      )}
    </ArrowStyle>
  );
}

export default ArrowBtn;
