import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'
import { media } from '../constants/breakpoints'

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
`

const Form = styled.form`
  margin: 0 auto 1rem;
  width: 100%;
  
  display: grid;
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem 0 1rem;

  textarea {
    margin: 1rem auto 0;
    width: calc(100% - 2rem);
  }

  ${media.tablet`
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  `}
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: calc(100% - 2rem);
    margin: 0 auto 1rem;
  }

  ${media.tablet`
    flex-direction: row;
    justify-content: center;

    &.multi-group div {
      width: calc(50% - 1.5rem);
      margin: 0 .5rem;
    }
  `}
`

class ContactForm extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  _handleChange = (e) => {
    let form = { ...this.state }
    form[e.target.id] = e.target.value
    this.setState(form)
  }

  _handleBlur = (e) => {
    let { value, name, id } = e.target
    this.props.validateSingleInput(value, name, id)
  }

  render(){
    let validated = this.props.validated
    return (
      <ContactFormWrapper>
        <Form>
          <InputGroup className='multi-group'>
            <Input
              validated={validated.firstName}
              errorText='We need your first name.'
              onChange={this._handleChange}
              onBlur={this._handleBlur}
              id='firstName' 
              name='name' 
              placeholder='First name'/>
            <Input
              validated={validated.lastName}
              errorText='We need your last name.'
              onChange={this._handleChange}
              onBlur={this._handleBlur}
              id='lastName' 
              name='name' 
              placeholder='Last name'/>
          </InputGroup>
          <InputGroup className='multi-group'>
            <Input
              validated={validated.email}
              errorText='Please use a valid e-mail address.'
              onChange={this._handleChange}
              onBlur={this._handleBlur}
              id='email' 
              name='email' 
              placeholder='Your e-mail address'/>
            <Input
              validated={validated.phone}
              errorText='This is not a number.'
              onChange={this._handleChange}
              onBlur={this._handleBlur}
              id='phone' 
              name='phone' 
              placeholder='Your phone number (optional)'/>
          </InputGroup>
          <InputGroup>
            <TextArea
              validated={validated.message}
              errorText="Sorry, your message can't be empty"
              onChange={this._handleChange}
              onBlur={this._handleBlur}
              name='message'
              id='message' 
              rows='6' 
              placeholder='Your message...'/>
          </InputGroup>
        </Form>
        <Button onClick={() => this.props.submitContactForm(this.state)} type='red'>Send</Button>
      </ContactFormWrapper>
    )
  }
}

export default ContactForm