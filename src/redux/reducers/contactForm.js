import { 
  SUBMIT_CONTACT_FORM_START,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_ERROR,
  SUBMIT_CONTACT_FORM_END,
  VALIDATED_INPUT,
} from '../actiontypes'

const defaultState = {
  isSubmitted: false,
  body: {},
  validated: {}
}

function contactFormReducer(state = defaultState, action) {
  switch(action.type){
    case SUBMIT_CONTACT_FORM_START:
      return { ...state, body: action.payload.body, isSubmitted: true }
    case SUBMIT_CONTACT_FORM_SUCCESS:
      return { ...state }
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