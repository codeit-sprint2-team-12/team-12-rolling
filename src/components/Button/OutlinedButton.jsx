import styled from 'styled-components';

const SIZES = {
  lg: {
    padding: `1.4rem 1.6rem`,
    fontSize: '1.8rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '2.8rem',
    letterSpacing: '-0.018rem',
    borderRadius: '1.2rem',
    height: '5.6rem',
    width: '16rem',
  },
  md: {
    padding: `0.8rem 1.6rem`,
    fontSize: '1.6rem',
    fontWeight: '400',
    lineHeight: '2.6rem',
    letterSpacing: '-0.016rem',
    borderRadius: '0.6rem',
    height: '4rem',
    width: '9rem',
  },
  sm: {
    padding: `0.6rem 1.6rem`,
    fontSize: '1.6rem',
    fontWeight: '500',
    lineHeight: '2.4rem',
    letterSpacing: 'normal',
    borderRadius: '0.6rem',
    height: '3.6rem',
    width: '9rem',
  },
  xs: {
    padding: `0.2rem 1.6rem`,
    fontSize: '1.4rem',
    fontWeight: '400',
    lineHeight: '2rem',
    letterSpacing: '-0.007rem',
    borderRadius: '0.6rem',
    height: '2.8rem',
    width: '9rem',
  },
};

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  color: var(--gray-900, #181818);
  text-align: center;

  border-radius: ${({ size }) => (size ? SIZES[size].borderRadius : `auto`)};
  padding: ${({ size }) => (size ? SIZES[size].padding : `auto`)};
  font-size: ${({ size }) => (size ? SIZES[size].fontSize : `auto`)};
  font-weight: ${({ size }) => (size ? SIZES[size].fontWeight : `auto`)};
  line-height: ${({ size }) => (size ? SIZES[size].lineHeight : `auto`)};
  letter-spacing: ${({ size }) => (size ? SIZES[size].letterSpacing : `auto`)};

  /* > div {
    width: ${({ size }) => (size ? SIZES[size].width : `auto`)};
  } */

  &:hover {
    border: 1px solid var(--gray-300, #ccc);
    background: var(--gray-100, #f6f6f6);
  }
  &:focus {
    border: 1px solid var(--gray-500, #555);
    background: var(--white, #fff);
  }
  &:active {
    border: 1px solid var(--gray-300, #ccc);
    background: var(--gray-100, #f6f6f6);
  }
  &:disabled {
    border: 1px solid var(--gray-300, #ccc);
    background: var(--gray-300, #ccc);
    > div {
      color: var(--white, #fff);
    }
  }
`;

function OutlinedButton({ className, size, children, disabled, onClick }) {
  return (
    <Button
      className={className}
      size={size}
      disabled={disabled}
      onClick={onClick}>
      <div>{children}</div>
    </Button>
  );
}

export default OutlinedButton;
