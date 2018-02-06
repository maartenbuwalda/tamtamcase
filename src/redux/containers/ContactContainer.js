import Contact from '../../components/Contact'
import { connect } from 'react-redux'
import { submitContactForm } from '../actions'

const mapStateToProps = state => {return {
  contactForm: state.contactForm
}}

const mapDispatchToProps = dispatch => {return {
  submitContactForm: (form) => {
    dispatch(submitContactForm(form))
  }
}}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)