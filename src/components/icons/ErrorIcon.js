import React  from 'react'
import error from '../../images/icons/error.svg'
import IconBackground from './IconBackground'

const ErrorIcon = (props) => {
  return (
    <IconBackground color={props.color}>
      <img src={error} alt='error icon'/>
    </IconBackground>
  )
}

export default ErrorIcon