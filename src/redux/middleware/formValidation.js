import {
  SUBMIT_CONTACT_FORM_START,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_ERROR,
  SUBMIT_CONTACT_FORM_END
} from '../actiontypes'

import { Redirect } from 'react-router-dom'
import { validName, validEmail, validMessage, validNumber } from '../../helpers'

const formValidation = store => next => action => {
  next(action)
  const dispatch = store.dispatch

  if(action.type === SUBMIT_CONTACT_FORM_START){
    let { firstName, lastName, email, phone, message } = action.payload.form
    let validated = {}

    if(!validName(firstName)){
      validated.firstName = false
    } else {
      validated.firstName = true
    }

    if(!validName(lastName)){
      validated.lastName = false
    } else {
      validated.lastName = true
    }

    if(!validEmail(email)){
      validated.email = false
    } else {
      validated.email = true
    }

    if(!validNumber(phone)){
      validated.phone = false
    } else {
      validated.phone = true
    }

    if(!validMessage(message)){
      validated.message = false
    } else {
      validated.phone = true
    }

    if(Object.values(validated).includes(false)){
      dispatch({
        type: SUBMIT_CONTACT_FORM_ERROR,
        payload: { validated }
      })
    } else {
      dispatch({ type: SUBMIT_CONTACT_FORM_SUCCESS })
    }
  
  }

  if(action.type === SUBMIT_CONTACT_FORM_SUCCESS){
    
  }

  if(action.type === SUBMIT_CONTACT_FORM_SUCCESS || action.type === SUBMIT_CONTACT_FORM_ERROR){
    dispatch({ type: SUBMIT_CONTACT_FORM_END })
  }
}

export default formValidation