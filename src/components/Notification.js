import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import Icon from './Icon'

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
      <Icon type={props.type}/>
      <span>{props.children}</span>
    </NotificationWrapper>
  )
}

export default Notification