import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import error from '../images/icons/error.svg'
import checkGreen from '../images/icons/check-green.svg'
import checkWhite from '../images/icons/check-white.svg'

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: rgba(000, 000, 000, .2);
  border-radius: 100%;
  margin-right: 1rem;
`

function renderIcon(type){
  switch(type){
    case 'error': return <img src={error}/>
    case 'success': 
    default:
      return <img src={checkWhite}/>
  }
}

const Icon = (props) => {
  return (
    <IconWrapper>
      {renderIcon(props.type)}
    </IconWrapper>
  )
}

export default Icon