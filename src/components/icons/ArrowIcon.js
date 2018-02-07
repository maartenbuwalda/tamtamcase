import React  from 'react'
import arrowLeft from '../../images/icons/arrow-left.svg'
import arrowRight from '../../images/icons/arrow-right.svg'
import IconBackground from './IconBackground'

function renderIcon(type){
  switch(type){
    case 'left': return <img src={arrowLeft} alt='arrow left icon'/>
    case 'right': return <img src={arrowRight} alt='arrow right icon'/>
    default:
  }
}

const ArrowIcon = (props) => {
  return (
    <IconBackground color={props.color}>
      {renderIcon(props.type)}
    </IconBackground>
  )
}

export default ArrowIcon