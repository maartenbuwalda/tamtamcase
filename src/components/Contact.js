import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'
import colors from '../constants/colors'
import { media } from '../constants/breakpoints'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

// Tried to use grid here, but it seems to have a bug in Chrome in combination with inputs
const ContactForm = styled.form`
  margin: 0 auto 1rem;
  width: 100%;
  max-width: 620px;
  display: grid;
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem 0;

  input, textarea {
    margin: auto;
    width: calc(100% - 4rem);
  }

  textarea {
    margin-top: 1rem;
  }

  input {
    margin-bottom: 1rem;
  }

  ${media.tablet`
    grid-row-gap: 1rem;
    margin-bottom: 2rem;

    input {
      width: calc(50% - 3.5rem);
      margin: 0 .5rem;
    }
  `}
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
    justify-content: center;
  `}
`

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <h1>We would love to hear from you</h1>
        <ContactForm>
          <InputGroup>
            <Input type='name' placeholder='First name'/>
            <Input type='name' placeholder='Last name'/>
          </InputGroup>
          <InputGroup>
            <Input type='email' placeholder='Your e-mail address'/>
            <Input type='tel' placeholder='Your phone number (optional)'/>
          </InputGroup>
          <TextArea rows='6' placeholder='Your message...'/>
        </ContactForm>
        <Button type='red'>Send</Button>
      </ContactWrapper>
    );
  }
}

export default Contact;
