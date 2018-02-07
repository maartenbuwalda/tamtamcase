import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import ErrorIcon from './icons/ErrorIcon'
import SuccessIcon from './icons/SuccessIcon'

const NotificationWrapper = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  background-color: rgba(000, 000, 000, .2);
  color: ${colors.white};
  padding: 1rem;
`

const Notification = (props) => {
  return (
    <NotificationWrapper>
      { props.type === 'error' ? <ErrorIcon/> : props.type === 'success' ? <SuccessIcon/> : undefined}
      <span>{props.children}</span>
    </NotificationWrapper>
  )
}

export default Notification