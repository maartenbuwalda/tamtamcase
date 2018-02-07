import Contact from '../../components/Contact'
import { connect } from 'react-redux'
import { submitContactForm, validateSingleInput, resetContactForm } from '../actions'

const mapStateToProps = state => {return {
  contactForm: state.contactForm
}}

const mapDispatchToProps = dispatch => {return {
  resetContactForm: (form) => {
    dispatch(resetContactForm())
  },
  submitContactForm: (form) => {
    dispatch(submitContactForm(form))
  },
  validateSingleInput: (input, type, id) => {
    dispatch(validateSingleInput(input, type, id))
  }
}}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)