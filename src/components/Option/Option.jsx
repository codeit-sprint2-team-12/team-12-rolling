import styled from 'styled-components';
import checkImg from '../../assets/check.svg';
import { useEffect, useState } from 'react';
const COLOR = [
  { value: 'beige', color: 'var(--orange-200, #FFE2AD)' },
  { value: 'purple', color: 'var(--purple-200, #ECD9FF)' },
  { value: 'blue', color: 'var(--blue-200, #B1E4FF)' },
  { value: 'green', color: 'var(--green-200, #d0f5c3)' },
];

const OptionContainerStyle = styled.div`
  gap: 1.6rem;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    display: grid;
    grid-template-columns: 15.4rem 15.4rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const OptionItemStyle = styled.button`
  display: flex;
  position: relative;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ $background }) => ($background ? $background : 'red')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 15.4rem;
    height: 15.4rem;
  }
  @media screen and (min-width: 768px) {
    width: 16.8rem;
    height: 16.8rem;
  }
`;

const CheckIconStyle = styled.img`
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

export default function Option({ isImage, onClick, backgroundImages }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const BACKGROUND = backgroundImages;
  const data = isImage ? BACKGROUND : COLOR;

  const handleClick = (e) => {
    const id = Number(e.target.id);
    if (isImage) {
      onClick('backgroundImageURL', BACKGROUND[id]);
    } else {
      onClick('backgroundColor', COLOR[id].value);
    }
    setSelectedIndex(Number(id));
  };

  useEffect(() => {
    setSelectedIndex(0);
    if (isImage) {
      onClick('backgroundImageURL', BACKGROUND[0]);
    } else {
      onClick('backgroundColor', 'beige');
      onClick('backgroundImageURL', null);
    }
  }, [isImage]);

  return (
    <OptionContainerStyle>
      {data.map((item, index) => {
        return (
          <OptionItemStyle
            key={index}
            $background={isImage ? `url(${item})` : item.color}
            id={index}
            type="button"
            onClick={handleClick}>
            {selectedIndex === index && (
              <CheckIconStyle src={checkImg} alt="체크됨" />
            )}
          </OptionItemStyle>
        );
      })}
    </OptionContainerStyle>
  );
}
