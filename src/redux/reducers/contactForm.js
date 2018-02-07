import { 
  SUBMIT_CONTACT_FORM_START,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_ERROR,
  SUBMIT_CONTACT_FORM_END,
  RESET_CONTACT_FORM,
  VALIDATED_INPUT,
} from '../actiontypes'

const defaultState = {
  isSubmitted: false,
  isSent: false,
  body: {},
  validated: {}
}

function contactFormReducer(state = defaultState, action) {
  switch(action.type){
    case RESET_CONTACT_FORM:
      return defaultState
    case SUBMIT_CONTACT_FORM_START:
      return { ...state, body: action.payload.body, isSubmitted: true }
    case SUBMIT_CONTACT_FORM_SUCCESS:
      return { ...state, isSent: true }
    case SUBMIT_CONTACT_FORM_ERROR:
      return { ...state, validated: action.payload.validated }
    case SUBMIT_CONTACT_FORM_END:
      return { ...state }
    case VALIDATED_INPUT:
      return { ...state, validated: action.payload.validated, isSubmitted: false }
    default:
      return state
  }
}

export { contactFormReducer }