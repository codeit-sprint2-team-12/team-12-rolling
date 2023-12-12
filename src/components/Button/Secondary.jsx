import React from 'react';
import styled from 'styled-components';




const  Secondary = ({children, disabled}) =>{

  return(
   
    <CommonButtonStyle disabled={disabled}><div>{children}</div></CommonButtonStyle>
  )

}

const CommonButtonStyle = styled.button`
  display: inline-flex;
  padding: 0.7rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.6rem;
  color: var(--purple-600, #9935FF);
  background: var(--white, #FFF);
  border: 0.1rem solid var(--purple-600, #9935FF);
  
  &:hover{
    border: 0.1rem solid var(--purple-700, #861DEE);
    background: var(--purple-100, #F8F0FF);
  }
  &:active{
  border: 0.1rem solid var(--purple-600, #9935FF);
  background: var(--white, #FFF);
  }
  
  &:focus{
  border: 0.1rem solid var(--purple-800, #6E0AD1);
  background: var(--white, #FFF);
  }

  &:disabled{
  color: var(--white, #FFF);
  background: var(--gray-300, #CCC);;
  border: none
  }
  `

export default Secondary