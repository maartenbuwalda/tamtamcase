import {
  VALIDATE_SINGLE_INPUT,
  GET_INSTAGRAM_FEED_START,
  SUBMIT_CONTACT_FORM_START
} from '../actiontypes'

export const getInstagramFeed = () => {
  return {
    type: GET_INSTAGRAM_FEED_START
  }
}

export const submitContactForm = (form) => {
  return {
    type: SUBMIT_CONTACT_FORM_START,
    payload: {
      form
    }
  }
}

export const validateSingleInput = (input, type, id) => {
  return {
    type: VALIDATE_SINGLE_INPUT,
    payload: {
      input, 
      type,
      id
    }
  }
}