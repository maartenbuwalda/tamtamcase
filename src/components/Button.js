import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const ButtonWrapper = styled.figure`
  background-color: ${props => {
    switch(props.type){
      case 'red': 
        return colors.red
      case 'black': 
      default:
        return colors.black
    }
  }};

  &:hover {
    background-color: ${props => {
      switch(props.type){
        case 'red': 
          return colors.redHover
        case 'black': 
        default:
          return colors.mediumGray
      }
    }};
  }

  cursor: pointer;
  transition: all .3s;
  color: ${colors.white};
  width: 10rem;
  padding: 1rem;
  text-align: center;
  border-radius: 2.5rem;
`

const Button = (props) => {
  return (
    <ButtonWrapper 
      type={props.type}
      onClick={props.onClick}>
      {props.children}
    </ButtonWrapper>
  )
}

export default Button