import React, { Component } from 'react'
import styled from 'styled-components'
import Notification from './Notification'
import ContactForm from './ContactForm'
import colors from '../constants/colors'
import { media } from '../constants/breakpoints'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 620px;
  margin: auto;
  
  h1 {
    margin: 1rem 0;
    text-align: center;
    color: ${colors.white};

    ${media.tablet`
      margin: 2rem 0 2rem;
    `}

    ${media.desktop`
      margin: 4rem 0 4rem;
    `}
  }
`



class Contact extends Component {

  render() {
    let { validated, isSubmitted } = this.props.contactForm
    return (
      <ContactWrapper>
        <h1>We would love to hear from you</h1>
        { Object.values(validated).includes(false) && isSubmitted 
          ? <Notification type='error'>Please complete the form and try again.</Notification>
          : undefined
        }
        <ContactForm 
          validated={validated} 
          validateSingleInput={this.props.validateSingleInput} 
          submitContactForm={this.props.submitContactForm}/>
      </ContactWrapper>
    );
  }
}

export default Contact;
