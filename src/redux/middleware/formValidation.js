import {
  SUBMIT_CONTACT_FORM_START,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_ERROR,
  SUBMIT_CONTACT_FORM_END
} from '../actiontypes'

const formValidation = store => next => action => {
  next(action)
  const dispatch = store.dispatch

  if(action.type === SUBMIT_CONTACT_FORM_START){
    let { firstName, lastName, email, phone, message } = action.payload.form
    let errors = {}

    if(!firstName.length || !firstName.match(/[a-zA-Z]/i)){
      errors.firstName = true
    }

    if(!lastName.length || !lastName.match(/[a-zA-Z]/i)){
      errors.lastName = true
    }

    // Source: http://emailregex.com/
    if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      errors.email = true
    }

    if(!phone.length || phone.match(/[a-zA-Z]/i)){
      errors.phone = true
    }

    if(!message.length){
      errors.message = true
    }

    if(Object.values(errors).includes(true)){
      dispatch({
        type: SUBMIT_CONTACT_FORM_ERROR,
        payload: { errors }
      })
    } else {
      dispatch({ type: SUBMIT_CONTACT_FORM_SUCCESS })
    }
  
  }

  if(action.type === SUBMIT_CONTACT_FORM_SUCCESS || action.type === SUBMIT_CONTACT_FORM_ERROR){
    dispatch({ type: SUBMIT_CONTACT_FORM_END })
  }
}

export default formValidation