import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const NotificationWrapper = styled.div`
  
`

const Notification = (props) => {
  return (
    <NotificationWrapper>
      <span>{props.children}</span>
    </NotificationWrapper>
  )
}

export default Notification