import React from 'react'
import Notification from './Notification'
import Page from './Page'

const MessageSent = (props) => {
  return (
    <Page>
      <h1>We would love to hear from you</h1>
      <Notification type='success'>Thank you, we have received your message.</Notification>
    </Page>
  );
}

export default MessageSent;
