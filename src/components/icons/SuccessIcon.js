import React  from 'react'
import checkWhite from '../../images/icons/check-white.svg'
import IconBackground from './IconBackground'

const SuccessIcon = (props) => {
  return (
    <IconBackground color={props.color}>
      <img src={checkWhite} alt='success icon'/>
    </IconBackground>
  )
}

export default SuccessIcon