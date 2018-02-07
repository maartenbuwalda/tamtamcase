import React, { Component } from 'react'
import Notification from './Notification'
import ContactForm from './ContactForm'
import Page from './Page'
import { Redirect } from 'react-router-dom'

class Contact extends Component {

  componentWillUnmount(){
    this.props.resetContactForm()
  }

  render() {
    let { validated, isSubmitted, isSent } = this.props.contactForm
    return (
      <Page>
        <h1>We would love to hear from you</h1>
        { Object.values(validated).includes(false) && isSubmitted 
          ? <Notification type='error'>Please complete the form and try again.</Notification>
          : undefined
        }
        <ContactForm 
          validated={validated} 
          validateSingleInput={this.props.validateSingleInput} 
          submitContactForm={this.props.submitContactForm}/>
        { isSent &&
          <Redirect to='/message-sent'/>
        }
      </Page>
    );
  }
}

export default Contact;
