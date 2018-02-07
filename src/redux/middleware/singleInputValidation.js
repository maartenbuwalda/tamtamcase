import {
  VALIDATED_INPUT,
  VALIDATE_SINGLE_INPUT
} from '../actiontypes'

import { validName, validEmail, validMessage, validNumber } from '../../helpers'

const singleInputValidation = store => next => action => {
  next(action)
  const dispatch = store.dispatch

  if(action.type === VALIDATE_SINGLE_INPUT){
    let { input, type, id } = action.payload
    let validated = { ...store.getState().contactForm.validated }

    function validate(method){
      if(method(input)){
        validated[id] = true
      } else {
        validated[id] = false
      }
    }

    switch(type){
      case 'name':
        validate(validName)
        break;
      case 'email':
        validate(validEmail)
        break;
      case 'phone':
        validate(validNumber)
        break;
      case 'message':
        validate(validMessage)
        break;
      default:
    }
    
    dispatch({
      type: VALIDATED_INPUT,
      payload: { validated }
    })
  }
}

export default singleInputValidation