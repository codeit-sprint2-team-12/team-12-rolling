import React from 'react';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa6";
//<FaPlus />



const  Plus = ({children, disabled}) =>{

  return(
   
    <PlusButtonStyle disabled={disabled}><div>{children}</div></PlusButtonStyle>
  )

}

const PlusButtonStyle = styled.button`
display: flex;
width: 56px;
height: 56px;
padding: 16px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 100px;
background: var(--gray-600, #4A4A4A);

  
  &:hover{
background: var(--gray-600, #4A4A4A);
  }
  &:active{
    display: flex;
padding: 16px;
align-items: flex-start;
gap: 10px;
border-radius: 100px;
background: var(--gray-500, #555);
  }
  
  &:focus{
    border-radius: 100px;
border: 1px solid var(--gray-800, #2B2B2B);
background: var(--gray-700, #3A3A3A);
  }

  &:disabled{
background: var(--gray-300, #CCC);
  border: none
  }
  `

export default Plus