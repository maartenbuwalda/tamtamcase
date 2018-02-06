import { 
  SUBMIT_CONTACT_FORM_START,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_ERROR,
  SUBMIT_CONTACT_FORM_END
} from '../actiontypes'

const defaultState = {
  isLoading: false,
  body: {},
  errors: {}
}

function contactFormReducer(state = defaultState, action) {
  switch(action.type){
    case SUBMIT_CONTACT_FORM_START:
      return { ...state, body: action.payload.body, isLoading: true }
    case SUBMIT_CONTACT_FORM_SUCCESS:
      return { ...state }
    case SUBMIT_CONTACT_FORM_ERROR:
      return { ...state, errors: action.payload.errors }
    case SUBMIT_CONTACT_FORM_END:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export { contactFormReducer }