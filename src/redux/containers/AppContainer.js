import App from '../../components/App'
import { connect } from 'react-redux'
import { getInstagramFeed } from '../actions'

const mapStateToProps = state => {return {
}}

const mapDispatchToProps = dispatch => {return {
  getInstagramFeed: () => {
    dispatch(getInstagramFeed())
  }
}}

export default connect(mapStateToProps, mapDispatchToProps)(App)