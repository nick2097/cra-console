import React from 'react';
import styled, {css} from "styled-components";
import {StyledComponent} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";
type StyleBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: "primary" | "outlined"
    active?: boolean
}


export const StyledBtn = styled.button<StyleBtnPropsType>`
  border: none;
  //background-color: ${props =>props.color || "blue"};
  font-size: ${props => props.fontSize};
  padding: 10px 20px;
  border-radius: 5px;
  //color: snow;
  font-weight: bold;
  
  ${props => props.btnType === "outlined" && css<StyleBtnPropsType> `
    border: 10px solid  ${props =>props.color || "blue"};
    color: ${props =>props.color || "blue"};
    background-color: transparent;
    &:hover{
      border-color: lightcoral;
      color: lightcoral;
      background-color: transparent;
    }
  `}
  ${props => props.btnType === "primary" && css<StyleBtnPropsType>`
    background-color: ${props =>props.color || "blue"};
    color: snow;
    &:hover {
      background-color: lightcoral;
    }
  `}
  ${props => props.active  && css<StyleBtnPropsType> `
  box-shadow: 5px 5px 5px 5px rgba(37, 37,44,0.6);
  `}
  
`
