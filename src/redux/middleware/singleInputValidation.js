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

    function invalid(){
      validated[id] = false
    }

    function valid(){
      validated[id] = true
    }

    switch(type){
      case 'name':
        if(validName(input)){
          valid()
          break;
        } else {
          invalid()
          break;
        }
      case 'email':
        if(validEmail(input)){
          valid()
          break;
        } else {
          invalid()
          break;
        }
      case 'phone':
        if(validNumber(input)){
          valid()
          break;
        } else {
          invalid()
          break;
        }
      case 'message':
        if(validMessage(input)){
          valid()
          break;
        } else {
          invalid()
          break;
        }
    }
    
    dispatch({
      type: VALIDATED_INPUT,
      payload: { validated }
    })
  }
}

export default singleInputValidation